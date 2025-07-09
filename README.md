# 🤖 KI-Messenger

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

### 💬 **Dein persönlicher KI-Messenger – wo Technologie auf Persönlichkeit trifft**

[Demo ansehen](#) · [Bug melden](https://github.com/yourusername/ki-messenger/issues) · [Feature vorschlagen](https://github.com/yourusername/ki-messenger/issues)

</div>

---

## 📖 Inhaltsverzeichnis

- [✨ Über das Projekt](#-über-das-projekt)
- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Mobile App](#-mobile-app)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [👥 Community](#-community)
- [📄 Lizenz](#-lizenz)
- [🙏 Danksagungen](#-danksagungen)

---

## ✨ Über das Projekt

<div align="center">
  <img src="https://via.placeholder.com/800x400/4B0082/FFFFFF?text=KI-Messenger+Preview" alt="KI-Messenger Screenshot" width="80%">
</div>

**KI-Messenger** ist ein revolutionäres Open-Source-Projekt, das die Art und Weise verändert, wie wir mit KI interagieren. Stell dir WhatsApp vor – aber anstatt mit echten Menschen zu chatten, unterhältst du dich mit einer Vielzahl einzigartiger KI-Persönlichkeiten, die so natürlich wirken, dass du fast vergisst, mit einer KI zu sprechen.

### 🌟 Warum KI-Messenger?

- **🎭 Einzigartige Persönlichkeiten**: Jede KI hat ihren eigenen Charakter und Kommunikationsstil
- **💰 Kosteneffizient**: Optimiert für kurze, alltägliche Nachrichten mit modernen, effizienten KI-Modellen
- **🌍 Community-Driven**: Von der Community, für die Community – jeder kann beitragen
- **📱 Überall verfügbar**: Web-App und native Android-App (iOS folgt)

> 💡 **Unsere Philosophie**: Wir erfinden das Rad nicht neu. Wie Perplexity.ai nutzen wir die besten verfügbaren KI-APIs und formen daraus ein einzigartiges, nützliches Produkt.

---

## 🎯 Features

### Aktuelle Features
- ✅ **Authentische KI-Chats** – Natürliche Konversationen, die sich echt anfühlen
- ✅ **Multiple Persönlichkeiten** – Verschiedene KI-Charaktere zum Chatten
- ✅ **Responsive Design** – Funktioniert auf Desktop und Mobile
- ✅ **Open Source** – Vollständig transparent und anpassbar

### Geplante Features
- 🔜 Personalisierte KI-Charaktere
- 🔜 Gruppen-Chats mit mehreren KIs
- 🔜 Sprachauswahl für KI-Persönlichkeiten
- 🔜 Export von Chat-Verläufen
- 🔜 Dark Mode

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js" />
<br>Node.js
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=express" width="48" height="48" alt="Express" />
<br>Express
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=angular" width="48" height="48" alt="Angular" />
<br>Angular
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="MongoDB" />
<br>MongoDB
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
</tr>
</table>

### Backend
- **Node.js** & **Express.js** - Server-Framework
- **MongoDB** mit **Mongoose** - Datenbank
- **JWT** - Authentifizierung
- **Socket.io** - Echtzeit-Kommunikation

### Frontend
- **Angular 16+** - Web-Framework
- **Cordova** - Mobile App Wrapper
- **IndexedDB** - Client-Side Caching
- **SCSS** - Styling

---

## 🚀 Quick Start

### Voraussetzungen

- Node.js (v18.0.0 oder höher)
- MongoDB (lokal oder Cloud)
- Angular CLI (`npm install -g @angular/cli`)
- Git

### Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/yourusername/ki-messenger.git
   cd ki-messenger
   ```

2. **Backend einrichten**
   ```bash
   # In Terminal 1
   cd server
   npm install
   
   # .env Datei erstellen
   cp .env.example .env
   # Füge deine Umgebungsvariablen ein:
   # MONGO_URI=mongodb://localhost:27017/ki-messenger
   # JWT_SECRET=dein-geheimer-schluessel
   # PORT=3000
   
   # Server starten
   npm start
   ```

3. **Frontend einrichten**
   ```bash
   # In Terminal 2
   cd client
   npm install
   
   # Development Server starten
   ng serve
   ```

4. **App öffnen**
   
   Navigiere zu `http://localhost:4200` 🎉

### Docker Alternative

```bash
# Mit Docker Compose
docker-compose up -d
```

---

## 📱 Mobile App

Die Android-App wird mit Cordova erstellt:

```bash
cd client
npm run build:android
```

Die APK findest du dann unter `client/platforms/android/app/build/outputs/apk/`

---

## 🗺️ Roadmap

### Phase 1: Foundation (Current) 🏗️
- [x] Projekt-Setup und Repository
- [x] Grundlegende Ordnerstruktur
- [ ] Server & REST APIs
- [ ] Authentifizierungssystem
- [ ] Frontend Service-Architektur
- [ ] Caching mit IndexedDB
- [ ] Android App Container

### Phase 2: KI-Integration 🤖
- [ ] KI-API Anbindung (OpenAI/Anthropic)
- [ ] Chat-Interface Entwicklung
- [ ] Persönlichkeits-Engine
- [ ] Konversations-Management
- [ ] Response-Optimierung

### Phase 3: Skalierung 📈
- [ ] Multi-Tenant Architektur
- [ ] Performance Optimierung
- [ ] iOS App
- [ ] Internationalisierung
- [ ] Premium Features

Sieh dir unsere [offenen Issues](https://github.com/yourusername/ki-messenger/issues) für eine vollständige Liste geplanter Features an.

---

## 🤝 Contributing

Wir lieben Contributions! Jeder ist willkommen, unabhängig vom Erfahrungslevel. 

### Wie du helfen kannst:

1. **🍴 Fork** das Projekt
2. **🔧 Feature Branch** erstellen (`git checkout -b feature/AmazingFeature`)
3. **💻 Commit** deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. **📤 Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **🔃 Pull Request** öffnen

### Contribution Guidelines

- Code sollte den Linting-Regeln folgen
- Füge Tests für neue Features hinzu
- Aktualisiere die Dokumentation bei Bedarf
- Folge dem [Conventional Commits](https://www.conventionalcommits.org/) Standard

### Good First Issues

Schau dir unsere [Good First Issues](https://github.com/yourusername/ki-messenger/labels/good%20first%20issue) an, wenn du neu im Projekt bist!

---

## 👥 Community

Tritt unserer wachsenden Community bei!

- 💬 [Discord Server](https://discord.gg/yourinvite)
- 🐦 [Twitter](https://twitter.com/ki_messenger)
- 📧 [Newsletter](https://ki-messenger.dev/newsletter)

### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/yourusername">
        <img src="https://avatars.githubusercontent.com/u/youruserid?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Dein Name</b></sub>
      </a>
      <br />
      <a href="#" title="Code">💻</a>
      <a href="#" title="Documentation">📖</a>
    </td>
    <!-- Weitere Contributors hier -->
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

## 🔒 Sicherheit

Sicherheitslücken bitte **NICHT** als Public Issue melden! Sende stattdessen eine E-Mail an security@ki-messenger.dev

---

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) für Details.

---

## 🙏 Danksagungen

- Alle Contributors, die dieses Projekt möglich machen
- [Angular Team](https://angular.io/) für das großartige Framework
- Die Open-Source Community für die Inspiration
- **DU** für dein Interesse an unserem Projekt! 

---

<div align="center">

### ⭐ Wenn dir das Projekt gefällt, gib uns einen Stern auf GitHub! ⭐

<br>

**[⬆ Nach oben](#-ki-messenger)**

</div>
