const express = require('express') //npm install --save express
const handlebars = require('express-handlebars')//npm install --save express-handlebars
const bodyParser = require('body-parser')//npm install --save body-parser
const admin = require("./routes/admim")
const app = express()
const path = require("path")
//const mongoose = require('mongoose')
//Configurações 
 //Body-Parser
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())
 //Handlebars
  app.engine('handlebars',handlebars({defaultLayout:'main'}))
  app.set('view engine','handlebars')
  //Mongoose
//Public
  app.use(express.static(path.join(__dirname,"public"))) //dirname pega o diretório absoluto
//Rotas
 
   app.use('/admin',admin)

//Outros
const PORT = 8081
app.listen(PORT,()=>{
    console.log("SERVIDOR RODANDO")
})