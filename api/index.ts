const mongoose = require('mongoose');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

mongoose.connect(process.env.MONGO_URI || 'your_default_mongo_uri').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});

app.get('/test', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.json({ name, email, password });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});