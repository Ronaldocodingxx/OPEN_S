import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from './chat-header/chat-header';
import { ChatFeldComponent } from './chat-feld/chat-feld';
import { ChatInputComponent } from './chat-input/chat-input';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ChatHeaderComponent, ChatFeldComponent, ChatInputComponent],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class ChatComponent {
  @Output() closeChat = new EventEmitter<void>();

  onCloseChat(): void {
    this.closeChat.emit();
  }
}
