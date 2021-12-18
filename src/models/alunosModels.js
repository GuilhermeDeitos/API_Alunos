const connect  = require("../config/connect"); //Importa o arquivo de conexão com o banco de dados

class AlunoTable{ 
    //metodos da API para CRUD de alunos
    /*
    C - CREATE (ADICIONAR)
    R - READ (LISTAR)
    U - UPDATE (ALTERAR)
    D - DELETE (DELETAR)
    */

     getAll(res){ //metodo para listar todos os alunos
         try{ //tratamento de erros
            connect.query(`SELECT * FROM alunos`,function(erro,result){//execução da query SQL para listar todos os alunos, retornando assim um array de objetos
                if(erro){
                    res.status(400).json(erro);
                } else {
                    res.status(200).json(result);
                }
            });
         }catch(err){
            console.log(err);
         }
       

    }

    getById(id,res){ //metodo para listar um aluno especifico
      try{ //tratamento de erros
        connect.query(`SELECT * FROM alunos WHERE cod_aluno=${id}`,function(erro,alunos){//execução da query SQL para listar todos os alunos, retornando assim um objetos do aluno
          let result = alunos[0]
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(result);
            }
        });
        
    }catch(err){
        console.log(err);
    }
    }

    postAluno(aluno,res){ //metodo para criar um aluno
      try { //tratamento de erros
        const infosAlunos = {...aluno}; //cria um objeto com as informações do aluno para inserir no banco de dados
        connect.query(`INSERT INTO alunos SET ?`,infosAlunos, function(erro,result){//execução da query SQL para adicionar um aluno e retornando o proprio objeto do aluno
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(aluno);
            }
        });
      } catch (err) {
        
      }
    }

    patchAluno(infosAlteradas, id, res){ //metodo para alterar um aluno
      try{ //tratamento de erros
        connect.query(`UPDATE alunos SET ? WHERE cod_aluno=${id}`,[infosAlteradas],function(erro,result){ //execução da query SQL para alterar um aluno e retornando as infos alteradas e o id do aluno
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({...infosAlteradas,id});
            }
        });
        
    }catch(err){
        console.log(err);
    }
    }

    deleteAluno(id,res){ //metodo para deletar um aluno
      try{ //tratamento de erros
        connect.query(`DELETE FROM alunos WHERE cod_aluno=${id}`,function(erro,result){ //execução da query SQL para deletar um aluno e retornando o proprio id do aluno deletad0
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({id});
            }
        });
        
    }catch(err){
        console.log(err);
    }
    }

  
}

module.exports = new AlunoTable; //exporta a classe para ser utilizada em outros arquivos
