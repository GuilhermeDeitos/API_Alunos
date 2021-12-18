const mysql = require('mysql') //Importando o modulo mysql

const config = { //objeto com as configurações do banco de dados
    host: 'localhost',
    port:3306,
    database:'alunos-bd',
    user: 'root',
    password: ''
}

const connection = mysql.createConnection(config) //fazendo a conexão com o banco

module.exports = connection //exportando a conexão o modulo da conexão