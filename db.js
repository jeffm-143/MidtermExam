const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch((err) => console.error('Connection error:', err));

module.exports = sequelize;
