const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// POST /api/messages/ - Erstellt eine Nachricht, speichert sie und gibt die temporäre ID zurück.
router.post('/', async (req, res) => {
  try {
    const { message, temporaereId } = req.body;
    const newMessage = new Message({
      message: message,
      temporaereId: temporaereId
    });
    const savedMessage = await newMessage.save();
    res.status(201).json({
      savedMessage: savedMessage,
      tempId: temporaereId
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// GET /api/messages/ - Ruft alle Nachrichten ab.
router.get('/', async (req, res) => {
  try {
    // Finde alle Nachrichten, sortiere sie nach Erstellungsdatum (neueste zuerst)
    // und limitiere das Ergebnis auf z.B. die letzten 50 Nachrichten.
    const messages = await Message.find({})
      .sort({ createdAt: -1 }) // -1 für absteigende Reihenfolge
      .limit(50); 
      
    res.status(200).json(messages);
  } catch (err) {
    // 500, da es ein Server-/Datenbankfehler ist.
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;