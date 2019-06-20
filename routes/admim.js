const express = require('express')
const routes = express.Router()
const mongoose = require("mongoose")
require("../models/Categorias")
const Categoria = mongoose.model("categorias")

routes.get('/',(req,res)=>{
    res.render("admin/index")
})

routes.get('/categorias',(req,res)=>{
    res.render("admin/categorias")
})

routes.post("/categorias/nova",(req,res)=>{
  const novaCategoria = {
      nome: req.body.nome,
      slug: req.body.slug
  }
  new Categoria(novaCategoria).save().then(()=>{
      console.log("Cadastrado com sucesso!")
  }).catch((erro)=>{
      console.log("Erro ao salvar"+erro)
  })
})

routes.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategorias")
})

module.exports = routes