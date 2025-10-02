exports.getMainPage = (req,res,next)=>{
     console.log("I am here");
     // res.render('main/main',{
     //      path : '/',
     //      title :'Calculator app'
     // })
     res.send("Calculator app is working")
}