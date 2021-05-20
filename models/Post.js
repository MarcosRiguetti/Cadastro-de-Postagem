const Sequelize = require("sequelize")
const connect = require('../models/db')

const Post = connect.define('postagem', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT,
    }
})

// Post.sync({force: true}).then(() => {
//     console.log("Tabela Criada!")
// });
module.exports = Post;