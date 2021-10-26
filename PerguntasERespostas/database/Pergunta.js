const { Model } = require('sequelize')
const Sequelize = require('sequelize')   //usando Pergunta com P maiusculo pra facilitar identificar o model
const connection = require('./database')

const Pergunta =  connection.define('perguntas',{

    titulo: {

        type:Sequelize.STRING,  //texto curto
        allowNull : false   //impede nulo
    },
    descriçao:{

        type: Sequelize.TEXT ,   //texto longo
        allowNull : false
    }

})

Pergunta.sync({force:false}).then(()=>{

  //  console.log('Posso deixar msg aqui se quiser')
 }) //se n tiver tabela 'pergunta', ele vai criar. Caso já exista, o force:false nao vai forçar criação dela, não vai recriar

module.exports = Pergunta