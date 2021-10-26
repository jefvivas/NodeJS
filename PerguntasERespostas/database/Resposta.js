const Sequelize = require('sequelize')   //usando Pergunta com P maiusculo pra facilitar identificar o model, nesse caso o "R" de "RESPOSTA"
const connection = require('./database')    

const Resposta = connection.define('respostas',{

    corpo:{

        type: Sequelize.TEXT,
        allowNull:false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}) //definir a tabela


Resposta.sync({force:false})

module.exports= Resposta