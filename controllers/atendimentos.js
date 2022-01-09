const Atendimento = require('../models/atendimentos')

module.exports = app => { //ler e mandar reposta para tela. 
    app.get('/atendimentos', (req, res) => res.send('Voce esta rodnado atendimento'))
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adciona(atendimento)

        res.send('Voce esta rodnado atendimento realizando um post')
    
        
    })
    }


    module.exports = new Atendimento    

