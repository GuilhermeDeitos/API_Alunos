const Aluno = require('../models/alunosModels');//Importação para a utilização da classe Alunos e seus metodos

module.exports = router =>{
    router.get('/aluno', (req, res) => { //rota que pegará todos os alunos cadastrados na rota e retornará para o usuário
        Aluno.getAll(res) //chamando o metodo getAll da classe Alunos
    })
    
    router.get('/aluno/:id', (req, res) => { //rota que pega o aluno pelo id passado pela rota e retorna para o usuário
        const id = parseInt(req.params.id) //recebendo o id passado pela rota
    
        Aluno.getById(id, res) //chamando o metodo getById da classe Alunos
    })
    
    router.post('/aluno', (req, res) => { //rota que cadastra um aluno na rota
       const aluno = req.body //recebendo os dados do aluno passado pelo body da requisição
        Aluno.postAluno(aluno, res) //chamando o metodo postAluno da classe Alunos
    }) 
    
    router.patch('/aluno/:id', (req, res) => { //rota que atualiza um aluno na rota passando o id do aluno 
        const id = parseInt(req.params.id) //recebendo o id passado pela rota
        const valores = req.body //recebendo os dados do aluno passado pelo body da requisição
    
        Aluno.patchAluno(valores,id,res)//chamando o metodo patchAluno da classe Alunos
    })
    
    router.delete('/aluno/:id', (req, res) => { //rota que deleta um aluno na rota passando o id do aluno
        const id = parseInt(req.params.id)//recebendo o id passado pela rota
    
        Aluno.deleteAluno(id, res)//chamando o metodo deleteAluno da classe Alunos
    })
    
}
