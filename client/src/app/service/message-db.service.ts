import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, from, of } from 'rxjs';
import { Message } from './message.service'; // Importiere das neue Interface

@Injectable({
  providedIn: 'root'
})
export class MessageDbService {

  private storeName = 'messages';

  constructor(private dbService: NgxIndexedDBService) {}

  /* =================== CREATE =================== */

  addMessage(message: Message): Observable<Message> {
    return this.dbService.add(this.storeName, message);
  }

  /* =================== READ =================== */

  getAllMessages(): Observable<Message[]> {
    return this.dbService.getAll(this.storeName);
  }

  /* =================== UPDATE =================== */

  updateMessage(message: Message): Observable<Message> {
    return this.dbService.update(this.storeName, message);
  }

  /**
   * Fügt neue Nachrichten hinzu oder aktualisiert bestehende in einem Schwung.
   */
  bulkAddOrUpdate(messages: Message[]): Observable<any> {
    if (!messages || messages.length === 0) {
      return of(true); // Nichts zu tun
    }
    // 'bulkPut' ist die korrekte Methode für add/update in ngx-indexed-db
    return from(this.dbService.bulkPut(this.storeName, messages));
  }
}
