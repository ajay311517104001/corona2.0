var express =require('express')
var app=express()
var router= express.Router()
var global=require('./routers/global')
var bodyParser = require('body-parser')
var cors = require('cors')
var axios=require('axios')
var fetch=require('node-fetch')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())




app.use('/',async function(req,res){
    await fetch('http://localhost:5000/')
    .then((response)=> res.send(response)).catch((err)=>console.log(err))
    
 })


app.listen(8000,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('server starts')
})