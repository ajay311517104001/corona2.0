var express =require('express')
var path =require('path')
var app=express()
var router= express.Router()
var global=require('./routers/global')
var bodyParser = require('body-parser')
var cors = require('cors')
var axios=require('axios')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())



app.use('/india',cors(),async function(req,res){
    await axios.get('https://api.covid19india.org/data.json')
    .then((response)=> { res.send(response.data) 
        }).catch((err)=>console.log(err))
    
 })
if(process.env.NODE_ENV=='production'){
    app.use(express.static(path.join(__dirname+'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'../client/build/index.html'))
    })
}

const PORT=process.env.PORT || 5000;
app.listen( PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('server starts')
})