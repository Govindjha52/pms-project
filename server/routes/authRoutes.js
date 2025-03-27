const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);
router.post('/forgot-password', Reset);

module.exports = router;