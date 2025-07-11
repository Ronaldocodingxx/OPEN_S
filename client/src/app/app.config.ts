// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

// HIER DIE ÄNDERUNGEN:
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

// 1. Definiere die Konfiguration für deine Datenbank
const dbConfig: DBConfig  = {
  name: 'KiMessengerDb', // Name deiner Datenbank
  version: 1,
  objectStoresMeta: [{
    store: 'messages', // Der Name deiner "Tabelle" für Nachrichten
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'message', keypath: 'message', options: { unique: false } },
      { name: 'temporaereId', keypath: 'temporaereId', options: { unique: true } },
      { name: 'status', keypath: 'status', options: { unique: false } },
      { name: 'timestamp', keypath: 'timestamp', options: { unique: false } }
    ]
  }]
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    
    // 2. Füge den Provider für die IndexedDB hinzu
    importProvidersFrom(NgxIndexedDBModule.forRoot(dbConfig))
  ]
};
