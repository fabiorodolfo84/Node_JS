const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas1','root','lamim123',{
    host:'localhost',
    dialect: 'mysql'
});


module.exports = connection;

