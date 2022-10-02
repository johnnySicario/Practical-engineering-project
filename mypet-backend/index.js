var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var userController = require('./controller/userController')
var app = express()


require("./configs/database")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/users',userController)




app.listen(8000,()=>{
    console.log("The server is up");
})