import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerChatsComponent } from '../messenger_chats/messenger_chats';

@Component({
  selector: 'app-chat-block',
  standalone: true,
  imports: [CommonModule, MessengerChatsComponent],
  templateUrl: './chat-block.html',
  styleUrl: './chat-block.css'
})
export class ChatBlockComponent {
}
