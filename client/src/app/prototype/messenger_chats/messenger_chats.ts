import { Component } from '@angular/core';
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

  // Der HostListener für die Leertaste wurde entfernt.

  /**
   * Diese Methode schaltet die Sichtbarkeit des Chats um.
   * Sie kann jetzt von einem Klick-Event im HTML aufgerufen werden.
   */
  toggleChat(): void {
    this.showChat = !this.showChat;
  }
}
