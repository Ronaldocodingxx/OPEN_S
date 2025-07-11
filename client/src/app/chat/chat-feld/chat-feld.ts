import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../service/message.service';
import { Subscription } from 'rxjs';

export interface Message {
  id?: number;
  message: string;
  isSender: boolean;
  timestamp?: string;
  temporaereId?: string;
  status?: string;
}

@Component({
  selector: 'app-chat-feld',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-feld.html',
  styleUrl: './chat-feld.css'
})
export class ChatFeldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chatContainer', { static: false }) chatContainerRef!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  showScrollButton: boolean = false;
  shouldAutoScroll: boolean = true;
  
  // Optional: Integrierter Input
  showIntegratedInput: boolean = false; // Setze auf true wenn Input integriert sein soll
  messageInput: string = '';
  
  private scrollThreshold: number = 100; // Pixel-Schwelle
  private isUserScrolling: boolean = false;
  private subscriptions: Subscription = new Subscription();
  private pollingInterval: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private messageService: MessageService
  ) {
    // Lade Nachrichten aus IndexedDB beim Start
    this.loadMessages();
    this.startPolling();
  }

  private startPolling(): void {
    this.pollingInterval = setInterval(() => {
      this.loadMessages();
    }, 150); // Alle 0.15 Sekunden abfragen
  }

  ngAfterViewInit(): void {
    // Warten bis View komplett geladen ist
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }

  trackByMessageId(index: number, message: Message): number | string {
    return message.id || message.temporaereId || index;
  }

  loadMessages(): void {
    const sub = this.messageService.getMessages().subscribe({
      next: (allMessagesFromDb) => {
        const messagesMap = new Map(this.messages.map(m => [m.temporaereId || m.id, m]));
        let hasChanges = false;

        // Update existing messages or add new ones
        allMessagesFromDb.forEach(dbMsg => {
          const uniqueId = dbMsg.temporaereId || dbMsg.id;
          const existingMsg = messagesMap.get(uniqueId);

          if (existingMsg) {
            // If status or id changed, update it
            if (existingMsg.status !== dbMsg.status || existingMsg.id !== dbMsg.id) {
              existingMsg.status = dbMsg.status;
              existingMsg.id = dbMsg.id;
              hasChanges = true;
            }
          } else {
            // Add new message
            this.messages.push({
              ...dbMsg,
              timestamp: this.formatTimestamp(dbMsg.timestamp),
            });
            hasChanges = true;
          }
        });

        if (hasChanges) {
          this.cdr.detectChanges();
          if (this.shouldAutoScroll) {
            setTimeout(() => this.scrollToBottom(), 100);
          }
        }
      },
      error: (error) => {
        console.error('Fehler beim Laden der Nachrichten:', error);
      }
    });

    this.subscriptions.add(sub);
  }

  onScroll(): void {
    if (!this.chatContainerRef || this.isUserScrolling) return;

    const element = this.chatContainerRef.nativeElement;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    // Prüfen ob wir nahe am unteren Rand sind
    const isNearBottom = distanceFromBottom <= this.scrollThreshold;

    // Zustand aktualisieren
    this.ngZone.run(() => {
      this.shouldAutoScroll = isNearBottom;
      this.showScrollButton = !isNearBottom && scrollHeight > clientHeight;
      this.cdr.detectChanges();
    });
  }

  scrollToBottom(): void {
    if (!this.chatContainerRef) return;

    this.isUserScrolling = true;
    const element = this.chatContainerRef.nativeElement;
    
    // Smooth scroll to bottom
    element.scrollTo({
      top: element.scrollHeight,
      behavior: 'smooth'
    });

    // Reset flag nach Animation
    setTimeout(() => {
      this.isUserScrolling = false;
    }, 300);
  }

  onScrollButtonClick(): void {
    // Scroll nach unten und Auto-Scroll aktivieren
    this.shouldAutoScroll = true;
    this.showScrollButton = false;
    this.scrollToBottom();
    this.cdr.detectChanges();
  }

  // Neue Nachricht über Service senden
  sendMessageViaService(text: string): void {
    if (!text.trim()) return;

    // The service call handles the optimistic update in IndexedDB and the HTTP request.
    // We only subscribe to log potential errors. The UI update is handled by polling.
    const sub = this.messageService.sendMessage(text).subscribe({
      error: (error) => {
        console.error('Fehler beim Senden der Nachricht:', error);
        // The service updates the status to 'error', and polling will update the UI.
      }
    });
    this.subscriptions.add(sub);

    // Immediately load messages to show the 'sending' status from IndexedDB.
    // This makes the UI feel instant.
    this.loadMessages();
    
    // Scroll down to show the new optimistic message.
    this.shouldAutoScroll = true;
    this.showScrollButton = false;
    setTimeout(() => this.scrollToBottom(), 50);
  }

  // Öffentliche Methode zum Testen
  sendTestMessage(): void {
    this.sendMessageViaService('Manuell gesendete Nachricht');
  }

  // Methode für integrierten Input
  sendMessage(): void {
    if (this.messageInput.trim()) {
      this.sendMessageViaService(this.messageInput.trim());
      this.messageInput = '';
    }
  }

  private getCurrentTime(): string {
    return new Date().toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private formatTimestamp(timestampString: string | undefined): string {
    if (!timestampString) {
      return this.getCurrentTime(); // Fallback if no timestamp is provided
    }
    const date = new Date(timestampString);
    if (isNaN(date.getTime())) {
      // Handle invalid date strings
      return this.getCurrentTime();
    }
    return date.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Hilfsmethode um den Status einer Nachricht zu bekommen
  getMessageStatus(message: Message): string {
    return message.status || 'sent';
  }

  // Hilfsmethode für Status-Styling
  getStatusClass(message: Message): string {
    const status = this.getMessageStatus(message);
    switch(status) {
      case 'sending': return 'status-sending';
      case 'sent': return 'status-sent';
      case 'error': return 'status-error';
      default: return '';
    }
  }
}