const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

//Associando o promise do node para do mongoose

mongoose.Promise = global.Promise

mongoose.connect('mongodb://db/mydb')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())

//Criando um model
const Client = restful.model('Client', {
    name : {type: String, required: true}
})

//Rest API - Aqui ele mapeia os metódos http para cada operação CRUD com mongo
Client.methods(['get', 'post', 'put', 'delete'])
//Para validação de dados
Client.updateOptions({new: true, runValidators: true})

Client.register(server, '/clients')

server.listen(3000)