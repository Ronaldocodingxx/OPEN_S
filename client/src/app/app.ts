import { Component } from '@angular/core';
import { Single } from './single/single';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Single, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
