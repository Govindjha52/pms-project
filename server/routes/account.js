const express = require('express');
const { getUserProfile } = require('../controllers/accountController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getUserProfile);

module.exports = router;