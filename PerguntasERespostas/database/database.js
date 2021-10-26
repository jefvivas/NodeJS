const Sequelize = require('sequelize') //inicia o sequelize

const connection = new Sequelize('guiaperguntas','root','@Jeta1902',{ //usa sequelize no banco guiaperguntas, usuario root, senha

    host: 'localhost', //qual local ta o BD
    dialect : 'mysql' // com qual banco de dados quer conversar

}) //usa sequelize no banco guiaperguntas

module.exports = connection //exporta a conexão