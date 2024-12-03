const express = require('express');
const { createTransaction, getTransactionsByUser } = require('../controllers/transactionsController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTransaction);
router.get('/:userId', authMiddleware, getTransactionsByUser);

module.exports = router;
