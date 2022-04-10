const express = require('express')
// const mongoose = require('mongoose')
const {MongoClient} = require("mongodb")
const client = new MongoClient('mongodb+srv://rumit:198305@testdb.tsej4.mongodb.net/testdb?retryWrites=true&w=majority')
const app = express();
var cors = require('cors')
app.use(cors())



app.get('/', async function(req, response){
    await client.connect()
    const db = client.db('testdb');
    const collection = db.collection('pizzas')
    collection.find().toArray(function(err, res){
        if(!err) console.log(err)
        response.json(res)
        client.close
    })
    console.log('подключение установлено')
})

const port = process.env.PORT || 3001
app.listen(port, ()=> console.log('Server is runnig'))