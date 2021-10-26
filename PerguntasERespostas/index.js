const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database') //pegando o sequelize exportado da pasta database, sendo o arquivo tb chamado database
const Pergunta = require('./database/Pergunta')
//conexao com model Pergunta, que por sua vez conecta com tabela pergutnas
const Resposta = require('./database/Resposta')
//conexcao com model Resposta

connection
    .authenticate()
    .then(() =>     {
    console.log('Conexão estabelecida com o BD')


    })
    .catch((msgErro) => {

    console.log(msgErro)
})



app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    Pergunta.findAll({raw : true,order:[
        ['id','DESC']  //ASC ou DESC
    ]}).then(perguntas =>{  //raw:true trás só os dados
        res.render("index",{
            perguntas: perguntas
        })

        console.log(perguntas)

    }) // select * from perguntas
    
})

app.get('/perguntar',(req,res)=>{


    res.render('perguntar')
})

app.post('/salvarpergunta',(req,res)=>{
    var titulo = req.body.titulo     //pegar info do titulo
    var descriçao = req.body.descriçao //pegar descriçao do formulario
  //só exibiria na tela  res.send("Formulario recebido titulo: " + ' '+ titulo + ' ' + 'descrição:  ' + descriçao)
    Pergunta.create({

        titulo: titulo,
        descriçao: descriçao
    }).then(()=>{
        res.redirect('/')


    })


})

app.get('/pergunta/:id',(req,res)=>{

    var id =  req.params.id

    Pergunta.findOne({
        where: {id:id}   // acho que id do BD : id do parametro id da rota 
    }).then(pergunta=>{
        if(pergunta!=undefined){ //se achar a pergunta
            
            Resposta.findAll({
                where:{perguntaID:pergunta.id},
                order:[
                    ['id','DESC']
                ]}).then(respostas=>{
                res.render('pergunta',{
                pergunta:pergunta,
                respostas:respostas
                })
            })
        }
        else{  //nao encontrada
            
            res.redirect('/')

        }

    })

})

app.post("/responder",(req,res)=>{

    var corpo = req.body.corpo
    var perguntaId = req.body.pergunta
    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId


    }).then(()=>{
        res.redirect('/pergunta/'+perguntaId)

    })


})

app.listen(8080,()=>{

    console.log('app rodando')
})