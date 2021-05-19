// Carregando módulos
    const express = require("express")
    const app = express()
    const handlebars = require('express-handlebars')

//Configurações
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handleabrs')
    //Conexão com o banco de dados
        const sequileze = new Sequelize('test', 'root', 'MarcoS00', {
            host: "localhost",
            dialect: 'mysql'
        })

// Outros
    // http
        const  PORT  =  8081
            app . ouvir ( PORT ,  ( )  =>  {
                console . log ( "Servidor rodando!" )
            } )