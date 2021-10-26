const Sequelize = require('sequelize')

const connection = new Sequelize('projeto2','root','@Jeta1902',{
    host: 'localhost',
    dialect : 'mysql',
    timezone: '-03:00'
})

module.exports = connection

