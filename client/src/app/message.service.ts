import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface Message {
  _id: string;
  sender: string;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/api/messages';
  private _messages = new BehaviorSubject<Message[]>([]);
  readonly messages$ = this._messages.asObservable();

  constructor(private http: HttpClient) { }

  private refreshMessages(): void {
    this.http.get<Message[]>(this.apiUrl)
      .subscribe({
        next: (data) => {
          this._messages.next(data);
        },
        error: (error) => {
          console.error('Error fetching messages:', error);
        }
      });
  }

  getMessages(): Observable<Message[]> {
    this.refreshMessages(); // Always refresh when requested
    return this.messages$;
  }

  sendMessage(sender: string, message: string): Observable<Message> {
    const newMessage = { sender, message };
    return this.http.post<Message>(this.apiUrl, newMessage).pipe(
      tap((msg) => {
        const currentMessages = this._messages.getValue();
        this._messages.next([...currentMessages, msg]);
      })
    );
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const currentMessages = this._messages.getValue();
        this._messages.next(currentMessages.filter(msg => msg._id !== id));
      })
    );
  }
}