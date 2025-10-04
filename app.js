const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const mainRoute = require('./routes/main')
const errrHundler = require("./controller/404")

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use(mainRoute)


app.use(errrHundler.errrHundler)
app.listen(5430,()=>{

     console.log("From node js");
})