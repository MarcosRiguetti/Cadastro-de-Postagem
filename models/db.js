//Conexão com o banco de dados   
    const Sequelize = require('sequelize')
    const connect = new Sequelize('postapp', 'root', 'MarcoS00', {
            host: "localhost",
            port: "3306",
            dialect: 'mysql'
        })
        connect.authenticate()
        .then( () => {
            console.log("Conectado com sucesso!")
        }).catch((erro) => {
            console.log("Falha ao conectar: " + erro)
        })

module.exports = connect;