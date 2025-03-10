const express = require('express');
const User = require('./models/User');
const sequelize = require('./db');

const app = express();
const PORT = 3000;

// Sync Sequelize models
sequelize.sync()
    .then(() => console.log('All models synced!'))
    .catch((err) => console.error('Sync error:', err));

// Route to fetch all users 
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
