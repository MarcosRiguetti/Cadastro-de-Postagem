//Conexão com o banco de dados   
    const Sequelize = require('sequelize')
    const sequileze = new Sequelize('postapp', 'root', 'MarcoS00', {
            host: "localhost",
            dialect: 'mysql'
        })
        sequileze.authenticate().then( () => {
            console.log("Conectado com sucesso!")
        }).catch((erro) => {
            console.log("Falha ao conectar: " + erro)
        })

module.exports = {
    Sequelize: Sequelize,
    sequileze: sequileze
}