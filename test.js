//   const Sequelize = require('sequelize')
//   const sequelize = new Sequelize('test', 'root', 'MarcoS00', {
//       host: "localhost",
//     dialect: 'mysql'
//   })

//  const Postagem =  sequelize.define('postagens', {
//      titulo: {
//          type: Sequelize.STRING
//     },
//      conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// Postagem.sync({force: true})

//  const Usuario = sequelize.define('conteudo', {
//      nome: {
//          type:Sequelize.STRING
//      },
//      sobrenome: {
//          type:Sequelize.STRING
//     },
//      idade: {
//          type:Sequelize.INTEGER
//      },
//      email: {
//          type:Sequelize.STRING
//      }
//  })

//  Usuario.sync({force: true})

// postagem.create({
//     titulo: "",
//     conteudo: ""
// })