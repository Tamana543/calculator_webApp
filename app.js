const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const mainRoute = require('./routes/main')


app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use(mainRoute)
app.use((req,res,next)=>{
     res.status(404).render('404',{pageTitle : 'Page not Fond'})
})


app.listen(5430,()=>{

     console.log("From node js");
})