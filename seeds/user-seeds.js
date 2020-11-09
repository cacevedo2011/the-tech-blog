const { User } = require('../models');
const bcrypt = require('bcrypt');
const password = 'password'
const hash = bcrypt.hashSync(password, 10);

const userData = [
    {
        username: 'Cristian',
        password: hash
    },
    {
        username: 'Michael',
        password: hash
    },
    {
        username: 'Damaris',
        password: hash
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;