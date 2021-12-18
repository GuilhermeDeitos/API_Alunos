class TableAlunos {  //classe com os metodos de criação da tabela
    createTableAlunos(conn) { //metodo de criação da tabela
        conn.query('CREATE TABLE IF NOT EXISTS alunos (cod_aluno int NOT NULL AUTO_INCREMENT, nome_aluno varchar(100) NOT NULL, telefone_aluno varchar(20) NOT NULL, endereco_aluno varchar(100) NOT NULL, data_nascimento varchar(20) NOT NULL, bairro_aluno varchar(100) NOT NULL, cidade_aluno varchar(50) NOT NULL, UF_aluno varchar(20) NOT NULL, email_aluno varchar(100) NOT NULL, PRIMARY KEY(cod_aluno))', function(err) { //execução da query SQL para criar a tabela alunos no banco de dados
            if(err) { //tratamento de erros
                console.log(err) 
            } else {
                console.log('Tabela criada') 
            }
        })
    }
}

module.exports = new TableAlunos //exportação da classe Tabelas