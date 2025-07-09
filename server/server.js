const express = require('express');
const connectDB = require('./db/connectdb');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
const app = express();
const port = 3000;

// Connect Database
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
  res.send(`
    <h1>Hallo vom Server!</h1>
    <p>Verfügbare Routen:</p>
    <ul>
      <li><b>POST /api/messages</b> - Nachricht speichern</li>
      <li><b>GET /api/messages</b> - Alle Nachrichten abrufen</li>
      <li><b>DELETE /api/messages/:id</b> - Nachricht löschen</li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
