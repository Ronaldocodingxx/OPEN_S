import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../../chat/chat'; // Import the ChatComponent

@Component({
  selector: 'app-messenger-chats',
  standalone: true,
  imports: [CommonModule, ChatComponent], // Add ChatComponent to imports
  templateUrl: './messenger_chats.html',
  styleUrl: './messenger_chats.css'
})
export class MessengerChatsComponent {
  showChat: boolean = false; // Property to control chat visibility

  @HostListener('document:keydown.space', ['$event'])
  handleKeyboardEvent(event: any) {
    event.preventDefault(); // Prevent default spacebar behavior (e.g., scrolling)
    this.toggleChat();
  }

  toggleChat(): void {
    this.showChat = !this.showChat;
  }
}
