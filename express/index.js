const express = require('express')
const app = express()


app.get("/",function(req,res){

    res.send("bem vindo, amigo") //Obrigatório mandar pelo menos 1 resposta pro rota
    res.send("Não funciona")//Pq só manda 1 resposta por rota


})


app.get("/canal/youtube",function(req,res){

    var canal = req.query["canal"]

    if(canal){

        res.send(canal) // para acessar passando o query é assim http://localhost:4000/canal/youtube?canal=miojo
    }else{

        res.send('nenhum canal fornecido')
    }




})

app.get("/blog/:nome?",function(req,res){ // ? no final deixa opcional o parametro

    var nome = req.params.nome

    if(nome){

        res.send("Ola "+ nome)
    }else{
    res.send("bem vindo ao blogg")
    }


})

app.get("/miojo/leitao",function(req,res){

    res.send("bem vindo, amigo miojo leitao") // So vai funcionar se entrar em miojo/leitao
    


})

app.listen(4000,function(erro){
    if(erro){
        console.log('falhou')
    }else{

        console.log('Servidor funcionando')
    }
})