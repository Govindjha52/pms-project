const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const { errorMonitor } = require('nodemailer/lib/xoauth2');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Registration logic
const registerUser = async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });

            // Nodemailer logic for sending registration email
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: 'Registration Successful',
                text: `Hello ${user.name}, welcome to our platform!`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email', error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login logic
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Forgot  Logic

const forgotuser = async(req, res) => {
    const { email } = req.body;
    try {
        const emailexists = await User.findOne({ email });
        if (emailexists) {
            return res.status(400).json({ message: 'mail are deliver in your gmail for reset your password ..' });

            const otpGenerator = require('otp-generator')
            otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

        }

        // Nodemailer send mail for Reset the password.

    } catch {
        return res.status(400).json({ message: "Email doesn't exists ...! " });
    }
}



module.exports = { registerUser, loginUser };