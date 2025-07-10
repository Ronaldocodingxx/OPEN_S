import { Component } from '@angular/core';
import { Prototype } from './prototype/prototype';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Prototype],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
