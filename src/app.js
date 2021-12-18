//Importações 
const conexao = require('./config/connect')
const createTable = require('./models/createTable')
const express = require('express') 
const consign = require('consign') 

//conectando no banco de dados
conexao.connect(erro => { 
    if(erro) { //tratamento de erros
        console.log(erro) 
    } else { 
        console.log('Conectado ao banco de dados') 
        
        createTable.createTableAlunos(conexao) //criação da tabela de alunos
        
        const app = express() //criação do app
        //algumas configurações do app abaixo
        app.use(express.urlencoded({ extended: true})) 
        app.use(express.json()) 

        consign() 
            .include('src/routes')
            .into(app)


        app.listen(3000, () => console.log('Servidor rodando na porta 8000'))  //Rodando o servidor na porta 3000
    }
})