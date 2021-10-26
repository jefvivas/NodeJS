const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{

        type: Sequelize.STRING,
        allowNull: false
    },body:{
        type : Sequelize.TEXT,
        allowNull: false

    }



})
Category.hasMany(Article) // uma categoria pra muitos artigos
Article.belongsTo(Category) // um artigo pra uma categoria

//Article.sync({force:true}) só primeira vez que rodar o programa

module.exports = Article