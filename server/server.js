const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/note');
const transactionsRoutes = require('./routes/transactions');
const accountRoutes = require('./routes/account');

const app = express();
require('dotenv').config();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('./api/authRoutes', authRoutes);
app.use('./api/note', notesRoutes);
app.use('./api/transactions', transactionsRoutes);
app.use('./api/account', accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});