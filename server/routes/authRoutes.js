const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { default: Forgot } = require('../../client/src/page/login/forgot');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', Forgot);

module.exports = router;