import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css'
})
export class ChatInputComponent {
  message: string = '';

  sendMessage(): void {
    if (this.message.trim()) {
      console.log('Sending message:', this.message);
      this.message = ''; // Clear input after sending
    }
  }
}
