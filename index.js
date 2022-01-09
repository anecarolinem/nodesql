const constomExpress = require('./config/constomExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabela')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log('conectado')
        
        Tabelas.init(conexao)
        const app = constomExpress()

        app.listen (3000,() => console.log('servidor rodando na porta 3000'))
    
    }
})



