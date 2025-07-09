import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

interface Message {
  _id: string;
  sender: string;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single.html',
  styleUrl: './single.css'
})
export class Single implements OnInit {
  messages$: Observable<Message[]> | undefined;
  newMessageSender: string = '';
  newTextMessage: string = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages$ = this.messageService.getMessages();
  }

  sendMessage(): void {
    if (!this.newMessageSender || !this.newTextMessage) {
      alert('Sender and message cannot be empty!');
      return;
    }

    this.messageService.sendMessage(this.newMessageSender, this.newTextMessage)
      .subscribe({
        next: () => {
          this.newMessageSender = '';
          this.newTextMessage = '';
        },
        error: (error) => {
          console.error('Error sending message:', error);
        }
      });
  }

  deleteMessage(id: string): void {
    this.messageService.deleteMessage(id)
      .subscribe({
        next: () => {
          // Messages will be updated via the observable
        },
        error: (error) => {
          console.error('Error deleting message:', error);
        }
      });
  }
}
