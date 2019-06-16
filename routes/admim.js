const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.render("admin/index")
})

routes.get('/posts',(req,res)=>{
    res.send("Página de Categorias")
})

module.exports = routes