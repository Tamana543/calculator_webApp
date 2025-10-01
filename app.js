const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const mainRoute = require('./routes/main')


app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))
app.set('views','views')
app.set('view engine','ejs')

app.use((req,res,next)=>{
     res.status(404).render('404',{pageTitle : 'Page not Fond'})
})

app.use(mainRoute)
app.listen(5420,()=>{

     console.log("From node js");
})