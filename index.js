// Carregando módulos
    const express = require("express")
    const app = express()
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const Post = require('./models/Post')

//Configurações
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
//Rotas
    app.get('/', (req, res) => {
        Post.all().then((posts) => {
            res.render('home', {posts: posts})
        })
    })
    app.get('/cad', (req, res) => {
        res.render('formulario')
    })
    app.post('/add', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            //res.send("Post criado com sucesso!")
            res.redirect('/')
        }).catch(() => {
            res.send("Houve um erro " + erro)
        })
    })
    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}}).then(() => {
            res.send("Postagem deletada com sucesso!")
        }).catch((erro) => {
            res.send("Esta postagem não existe!")
        })
    })
// Outros
    // http
        const PORT = 8081
            app.listen( PORT , ()  => {
                console.log ("Servidor rodando!")
            } )