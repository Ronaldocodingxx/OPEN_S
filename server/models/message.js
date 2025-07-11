const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  // Das 'sender'-Feld wurde für einfaches Testen entfernt.
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // HIER DIE ÄNDERUNG: Ein optionales Feld für die temporäre ID vom Client.
  temporaereId: {
    type: String,
    required: false // Wichtig: Dieses Feld ist nicht zwingend erforderlich.
  }
});

module.exports = mongoose.model('Message', messageSchema);