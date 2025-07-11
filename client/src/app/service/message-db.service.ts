/**
 * MessageDbService - IndexedDB Wrapper für Nachrichten-Speicherung
 * 
 * Verwaltet die lokale Speicherung von Nachrichten in IndexedDB
 * für Offline-Funktionalität und optimistische Updates.
 */

import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageDbService {

  private storeName = 'messages';

  constructor(private dbService: NgxIndexedDBService) {}

  /* =================== CREATE =================== */
  
  addMessage(message: any): Observable<any> {
    return this.dbService.add(this.storeName, message).pipe(
      tap(key => console.log('Nachricht in IndexedDB gespeichert, Key:', key))
    );
  }

  /* =================== READ =================== */
  
  getAllMessages(): Observable<any[]> {
    return this.dbService.getAll(this.storeName);
  }

  /* =================== UPDATE =================== */
  
  updateMessage(message: any): Observable<any> {
    // Validierung: ID muss vorhanden und numerisch sein
    if (typeof message.id === 'undefined' || message.id === null || typeof message.id !== 'number') {
      console.error('Error: Cannot update message without a valid numeric ID.', message);
      return throwError(() => new Error('Cannot update message without a valid numeric ID.'));
    }
    
    return this.dbService.update(this.storeName, message).pipe(
      tap(updated => console.log('Nachricht in IndexedDB aktualisiert:', updated))
    );
  }
}