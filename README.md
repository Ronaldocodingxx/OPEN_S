KI-Messenger - Ein Community-Startup-Projekt
Ein Open-Source-Projekt, bei dem jeder willkommen ist, mitzuwirken. Lasst uns gemeinsam etwas Grossartiges bauen!

✨ Die Vision: Dein persönlicher KI-Messenger
Stell dir einen Messenger vor, der so einfach und intuitiv ist wie WhatsApp – aber anstatt mit echten Menschen chattest du mit einer Vielzahl von einzigartigen KI-Persönlichkeiten.

Das ist die Kernidee von KI-Messenger. Wir entwickeln eine reine Text-Chat-Anwendung ohne Bilder, Memos oder Videos. Der Fokus liegt auf authentischen, unterhaltsamen Gesprächen, die sich so natürlich anfühlen, dass man fast vergisst, dass man mit einer KI spricht.

Durch den Fokus auf kurze, alltägliche Nachrichten ("Hallo, wie geht's?", "Was machst du so?") nutzen wir die Effizienz moderner, kleinerer KI-Modelle. Das macht die API-Aufrufe günstig und erlaubt es uns, ein Produkt für Millionen von Menschen zu schaffen.

Unsere Philosophie: Wir erfinden keine neuen LLMs. Wie Perplexity.ai nutzen wir die besten verfügbaren KI-APIs, um daraus ein einzigartiges und nützliches Produkt zu formen.

🌟 Warum dieses Projekt?
Wir glauben, dass es eine riesige Marktlücke für persönliche KI-Unterhaltung gibt. Die Menschen werden es lieben, immer KI-Chatfreunde dabeizuhaben, die jederzeit für ein Gespräch bereit sind – jeder mit seiner eigenen, eingeprägten Persönlichkeit.

Dieses Projekt wird durch die Stärke der Open-Source-Community angetrieben. Wir glauben fest daran, dass wir gemeinsam etwas schaffen können, das ein Einzelner nicht vermag. Jeder, der an diesem Projekt beteiligt ist, soll Anerkennung für seine Arbeit erhalten und einen wertvollen Beitrag für sein Portfolio und seine nächste Bewerbung schaffen. Wir werden es schaffen!

🚀 Getting Started / Erste Schritte
Um das Projekt lokal auf deinem Computer zum Laufen zu bringen, folge diesen Schritten. Das Projekt ist in zwei Hauptteile aufgeteilt: den server und den client.

1. Voraussetzungen
Node.js (Version 18 oder höher empfohlen)

MongoDB muss lokal installiert sein oder du benötigst einen Connection String zu einer Cloud-Datenbank.

Angular CLI (npm install -g @angular/cli)

2. Backend-Server einrichten
# 1. Wechsle in den Server-Ordner
cd server

# 2. Installiere die notwendigen Pakete
npm install

# 3. Erstelle eine .env-Datei im Server-Ordner und füge deine Umgebungsvariablen hinzu
# (MONGO_URI, JWT_SECRET etc.)

# 4. Starte den Server
npm start

3. Frontend-Client einrichten
# 1. Wechsle in einem ZWEITEN, SEPARATEN Terminal in den Client-Ordner
cd client

# 2. Installiere die notwendigen Pakete
npm install

# 3. Starte die Angular-Anwendung
ng serve

Danach sollte das Frontend unter http://localhost:4200 erreichbar sein und mit deinem lokalen Server kommunizieren.

🛠️ Technologie-Stack
Backend: Node.js, Express, Mongoose

Frontend: Angular, Cordova (für die Android App)

Datenbank: MongoDB

🤝 Wie du mitarbeiten kannst (Contributing)
Wir freuen uns über jede Hilfe! Egal ob du Fehler findest, neue Funktionen vorschlagen oder direkt am Code mitschreiben möchtest.

Fork dieses Repository.

Erstelle einen neuen Branch für deine Änderung (git checkout -b feature/deine-neue-funktion).

Committe deine Änderungen (git commit -m 'feat: Meine neue Funktion hinzugefügt').

Pushe deine Änderungen zu deinem Fork (git push origin feature/deine-neue-funktion).

Erstelle einen Pull Request zurück zu diesem Haupt-Repository.

🗺️ Roadmap (Zukünftige Ziele)
Unsere Entwicklung ist in Phasen aufgeteilt. Aktuell konzentrieren wir uns auf die Schaffung einer soliden Grundlage.

Phase 1: Grundstruktur und Kernfunktionen (Boilerplate)
[ ] Grundlegende Anwendungsstruktur: Aufbau der Ordnerstruktur für Frontend und Backend.

[ ] Server & APIs: Entwicklung der grundlegenden Server-Logik und der ersten API-Endpunkte.

[ ] Authentifizierungssystem: Implementierung einer sicheren Benutzer-Registrierung und eines Logins per E-Mail.

[ ] Performante Architektur: Aufbau einer sauberen Frontend-Logik über Services, die die Daten an die Komponenten liefern.

[ ] Frontend Caching: Nutzung von IndexedDB und LocalStorage, um bereits geladene Daten schnell verfügbar zu machen und die Performance zu steigern.

[ ] Android App Container: Erstellung der grundlegenden Cordova-App als Hülle für die Angular-Anwendung.

[ ] Web-App Deployment: Aufsetzen der Web-Anwendung unter einer eigenen Domain.

Phase 2: KI-Chat-Implementierung
[ ] Anbindung an eine externe KI-API.

[ ] Entwicklung der grundlegenden Chat-Oberfläche.

[ ] Erstellung der ersten KI-generierten Chat-Partner.
