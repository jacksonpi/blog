const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contato = new Schema({
    nome:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    segestao:{
        type:String,
        required:true
    },
    semensagem:{
        type:String,
        required:true
    }
})

mongoose.model("contatos",Contato)