const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserModel = require('./models/User');
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

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await UserModel.create({ 
            name, 
            email, 
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        });
    
        res.json(userDoc);
    } catch (error) {
        res.status(422).json({ message: 'User already exists' });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});