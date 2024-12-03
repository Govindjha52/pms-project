const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  faculty: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  missedDate: {
    type: Date,
    required: true,
  },
  replacementFaculty: {
    type: String,
    default: null,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Note', noteSchema);
