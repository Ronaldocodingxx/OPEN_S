/**
 * ChatInputComponent - UI-Komponente für Nachrichteneingabe
 * 
 * Verarbeitet Benutzereingaben und kommuniziert mit MessageService
 * für optimistische Updates und Nachrichtenversand.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css'
})
export class ChatInputComponent {
  
  message: string = '';
  
  // Event für Parent-Komponente (z.B. MessageList)
  @Output() messageSent = new EventEmitter<any>();
  
  constructor(private messageService: MessageService) {}
  
  /* =================== NACHRICHT SENDEN =================== */
  
  sendMessage(): void {
    const textToSend = this.message.trim();
    
    // Leere Nachrichten ignorieren
    if (!textToSend) {
      return;
    }
    
    /* --- Optimistischer Update Flow --- */
    this.messageService.sendMessage(textToSend).subscribe(optimisticMessage => {
      // Parent-Komponente über neue Nachricht informieren
      this.messageSent.emit(optimisticMessage);
    });
    
    // Eingabefeld sofort leeren für nächste Nachricht
    this.message = '';
  }
}