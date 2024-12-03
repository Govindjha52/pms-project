const Note = require('../models/Note');

const createNote = async (req, res) => {
  const { faculty, subject, missedDate } = req.body;

  if (!faculty || !subject || !missedDate) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newNote = new Note({
      faculty,
      subject,
      missedDate,
    });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { createNote, getAllNotes };
