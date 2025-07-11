/**
 * MessageService - Zentrale Nachrichtenverwaltung mit optimistischen Updates
 * 
 * Koordiniert zwischen UI, lokalem Storage (IndexedDB) und Server.
 * Implementiert optimistische Updates für bessere UX.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { MessageDbService } from './message-db.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:3000/api/messages'; 

  constructor(
    private http: HttpClient,
    private messageDbService: MessageDbService
  ) { }

  /* =================== NACHRICHT SENDEN =================== */
  
  sendMessage(messageText: string): Observable<any> {
    // Temporäre ID für optimistisches Update
    const temporaereId = `temp_${Date.now()}_${Math.random()}`;
    const optimisticMessage = {
      message: messageText,
      temporaereId: temporaereId,
      status: 'sending'
    };

    return this.messageDbService.addMessage(optimisticMessage).pipe(
      switchMap((msgWithId: any) => {
        // msgWithId enthält die von IndexedDB zugewiesene ID
        
        /* --- Server-Kommunikation --- */
        const bodyToServer = {
          message: messageText,
          temporaereId: msgWithId.temporaereId
        };

        return this.http.post(this.apiUrl, bodyToServer).pipe(
          switchMap((response: any) => {
            /* --- Erfolg: Status aktualisieren --- */
            const finalMessage = response.savedMessage;
            finalMessage.status = 'sent';
            finalMessage.id = msgWithId.id; // Wichtig: ID für Update beibehalten
            
            return this.messageDbService.updateMessage(finalMessage);
          }),
          catchError((err) => {
            /* --- Fehler: Status auf 'error' setzen --- */
            console.error('Fehler beim Senden:', err);
            return this.messageDbService.updateMessage({
              id: msgWithId.id,
              status: 'error',
              message: msgWithId.message,
              temporaereId: msgWithId.temporaereId
            }).pipe(
              switchMap(() => of(msgWithId))
            );
          })
        );
      }),
      catchError((err) => {
        /* --- Fehler beim lokalen Speichern --- */
        console.error('Fehler beim Speichern in IndexedDB:', err);
        return of({ ...optimisticMessage, status: 'error' });
      })
    );
  }

  /* =================== NACHRICHTEN ABRUFEN =================== */
  
  getMessages(): Observable<any[]> {
    return this.messageDbService.getAllMessages();
  }
}