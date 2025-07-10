import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-header.html',
  styleUrl: './chat-header.css'
})
export class ChatHeaderComponent {
  @Output() closeChat = new EventEmitter<void>();

  onCloseClick(): void {
    this.closeChat.emit();
  }
}
