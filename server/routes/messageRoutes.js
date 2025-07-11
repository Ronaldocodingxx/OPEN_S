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

module.exports = router;