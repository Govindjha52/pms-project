const express = require('express');
const { createNote, getAllNotes } = require('../controllers/notesController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/raise-note', authMiddleware, createNote);
router.get('/see-note', authMiddleware, getAllNotes); // notification count

module.exports = router;