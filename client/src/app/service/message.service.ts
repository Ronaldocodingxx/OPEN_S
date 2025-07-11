import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer, forkJoin } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { MessageDbService } from './message-db.service';

/**
 * Eine "Blaupause" für unsere Nachrichten-Objekte.
 * TypeScript weiss jetzt genau, welche Eigenschaften eine Nachricht hat.
 */
export interface Message {
  id?: number; // Die lokale ID von IndexedDB (optional)
  _id?: string; // Die finale ID vom MongoDB-Server (optional)
  message: string;
  temporaereId: string;
  status: 'sending' | 'sent' | 'error';
  timestamp?: string; // Zeitstempel vom Server (optional)
  isSender: boolean; // KORREKTUR: 'isSender' ist jetzt eine erforderliche Eigenschaft.
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:3000/api/messages';

  constructor(
    private http: HttpClient,
    private messageDbService: MessageDbService
  ) {
    this.startPolling();
  }

  /* =================== NACHRICHT SENDEN =================== */

  sendMessage(messageText: string): Observable<Message> {
    const optimisticMessage: Message = {
      message: messageText,
      temporaereId: `temp_${Date.now()}_${Math.random()}`,
      status: 'sending',
      isSender: true // Eine vom Client gesendete Nachricht ist immer vom "Sender"
    };

    return this.messageDbService.addMessage(optimisticMessage).pipe(
      switchMap((msgWithId: Message) => {
        const bodyToServer = {
          message: messageText,
          temporaereId: msgWithId.temporaereId
        };

        return this.http.post<{ savedMessage: Message }>(this.apiUrl, bodyToServer).pipe(
          switchMap(response => {
            const finalMessage: Message = {
              ...response.savedMessage,
              id: msgWithId.id, // Die lokale ID für das Update beibehalten
              status: 'sent',
              isSender: true // Auch die finale Nachricht ist vom Sender
            };
            return this.messageDbService.updateMessage(finalMessage);
          }),
          catchError((err) => {
            console.error('Fehler beim Senden:', err);
            const errorMsg: Message = {
              ...msgWithId,
              status: 'error'
            };
            return this.messageDbService.updateMessage(errorMsg).pipe(
              switchMap(() => of(errorMsg))
            );
          })
        );
      }),
      catchError((err) => {
        console.error('Fehler beim Speichern in IndexedDB:', err);
        const errorMsg: Message = { ...optimisticMessage, status: 'error' };
        return of(errorMsg);
      })
    );
  }

  /* =================== NACHRICHTEN ABRUFEN =================== */

  getMessages(): Observable<Message[]> {
    return this.messageDbService.getAllMessages();
  }

  /* =================== POLLING & SYNCHRONISATION =================== */

  private startPolling(): void {
    timer(0, 5000).pipe(
      switchMap(() => this.synchronizeWithServer())
    ).subscribe({
      next: () => console.log('Sync abgeschlossen.'),
      error: err => console.error('Ein kritischer Fehler ist im Polling-Stream aufgetreten:', err)
    });
  }

  private synchronizeWithServer(): Observable<any> {
    return forkJoin({
      serverMessages: this.http.get<Message[]>(this.apiUrl),
      localMessages: this.messageDbService.getAllMessages()
    }).pipe(
      switchMap(({ serverMessages, localMessages }) => {
        const localMessagesMap = new Map<string, Message>(localMessages.map(m => [m.temporaereId, m]));
        const messagesToProcess: Message[] = [];

        for (const serverMsg of serverMessages) {
          const localMsg = localMessagesMap.get(serverMsg.temporaereId);

          if (localMsg && localMsg.status === 'sending') {
            // FALL 1: Optimistische Nachricht wird vom Server bestätigt.
            localMsg.status = 'sent';
            localMsg._id = serverMsg._id;
            localMsg.timestamp = serverMsg.timestamp;
            messagesToProcess.push(localMsg);
          } else if (!localMessages.some(m => m._id === serverMsg._id)) {
            // FALL 2: Neue Nachricht von anderem Nutzer.
            messagesToProcess.push({ ...serverMsg, status: 'sent', isSender: false });
          }
        }
        
        return this.messageDbService.bulkAddOrUpdate(messagesToProcess);
      }),
      catchError(err => {
        console.error('Fehler bei der Synchronisation:', err);
        return of(null);
      })
    );
  }
}
