const express = require('express');
const { createNote, getAllNotes } = require('../controllers/notesController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createNote);
router.get('/', authMiddleware, getAllNotes);

module.exports = router;
