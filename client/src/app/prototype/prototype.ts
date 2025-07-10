import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { ChatBlockComponent } from './chat-block/chat-block';

@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ChatBlockComponent],
  templateUrl: './prototype.html',
  styleUrl: './prototype.css'
})
export class Prototype {
  constructor() { }
}
