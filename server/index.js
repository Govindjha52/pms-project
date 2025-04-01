const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const otpRoutes = require('./routes/otpRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', otpRoutes);


const port = process.env.PORT || 5000;

// Test route
app.get('/', (req, res) => {

    res.send('Server is running...');
});
app.get('/home', (req, res) => {
    res.send('hello user!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}, now you can connect to your project`);
});