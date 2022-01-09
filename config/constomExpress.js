const express = require('express')  //chmar biblioteca
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = ()=> {
    const app = express() 

    app.use(bodyParser.urlencoded({extended: true}))//metodos para ler resposta do console 
    app.use(bodyParser.json) //ler json

    consign()
        .include('controllers')
        .into(app)

    return app
}