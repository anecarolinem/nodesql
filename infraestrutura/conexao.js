const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root',
    password: '91918190',
    database: 'agenda-pet',
})

module.exports = conexao