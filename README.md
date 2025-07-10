# 🤖 AI-Messenger

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

### 💬 **Your personal AI messenger – where technology meets personality**

</div>

---

## ✨ About the Project

**AI-Messenger** is a revolutionary open-source project that transforms how we interact with AI. Imagine WhatsApp – but instead of chatting with real people, you engage with a variety of unique AI personalities that feel so natural, you almost forget you're talking to an AI.

### 💭 The Vision in Action

Picture this: You're sitting alone on your couch, feeling bored. Suddenly – **ping** – a push notification. Anna texts you:

> "Hey, who are you? 🤔"

A red dot appears on the chat app. Your heart races, curiosity rises. You open the messenger and see just this one message. The AI is typing... and typing... you can see it. Then:

> "Oh sorry, wrong number! 😅"

This is how a conversation begins that feels like talking to a real person.

### 🎯 Why We'll Succeed

**Efficiency by Design**: We leverage AI technology cleverly. Short, everyday chat messages mean:
- 💰 Minimal token consumption = low API costs
- ⚡ Fast response times
- 📊 Predictable costs per user

**Unique Personalities**: Each AI has:
- Its own name, age, background
- A consistent personality through specialized prompts
- Memory of past conversations
- Authentic behaviors (typos, emojis, pauses)

We combine the best of **character.ai** and **Replika** in a familiar messenger format. The AIs simulate real chat conversations so convincingly that users become emotionally invested.

### 🌟 Why AI-Messenger?

- **🎭 Living Characters**: Each AI has a name, age, hobbies, and unique personality
- **💰 Cost-Efficient**: Short messages = minimal token usage = scalable solution
- **❤️ Emotional Connection**: Push notifications and realistic chat simulations create genuine bonds
- **🧠 Intelligent Design**: Optimally utilizes modern AI APIs for maximum performance
- **🌍 Community-Driven**: By the community, for the community – everyone can contribute
- **⚡ MVP Approach**: We focus on a lean, performant Minimum Viable Product without unnecessary features

> 💡 **Our Philosophy**: We don't reinvent the wheel. Like Perplexity.ai, we use the best available AI APIs and shape them into a unique, addictive product.

---

## 🎯 Features

### Current Features
- ✅ **Authentic AI Chats** – Natural conversations that feel real
- ✅ **Multiple Personalities** – Various AI characters with their own backstories
- ✅ **Push Notifications** – AIs can message you like real contacts
- ✅ **Typing Indicators** – See when the AI is "typing" for more realism
- ✅ **Chat Memory** – AIs remember past conversations
- ✅ **Responsive Design** – Works on desktop and mobile
- ✅ **Open Source** – Fully transparent and customizable

### Planned Features
- 🔜 AI-initiated conversations at different times of day
- 🔜 Group chats with multiple AI personalities
- 🔜 Advanced personality customization
- 🔜 Moods and emotions for AIs
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
- **Node.js** & **Express.js** - Server framework
- **MongoDB** with **Mongoose** - Database
- **JWT** - Authentication
- **RESTful APIs** - Communication

### Frontend
- **Angular 16+** - Web framework
- **IndexedDB** - Client-side caching
- **CSS** & **Bootstrap** - Styling (locally integrated)

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.0.0 or higher)
- MongoDB (local or cloud)
- Angular CLI (`npm install -g @angular/cli`)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-messenger.git
   cd ai-messenger
   ```

2. **Set up backend**
   ```bash
   cd server
   npm install
   npm start
   ```

2.  **Run the Server:**
    ```bash
    node server.js
    ```

## API Endpoints

- `GET /` : Displays available API routes.
- `POST /api/messages` : Create a new message.
- `GET /api/messages` : Retrieve all messages.
- `DELETE /api/messages/:id` : Delete a message by ID.
