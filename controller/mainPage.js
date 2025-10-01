exports.getMainPage = (req,res,next)=>{
     console.log("I am here");
     res.render('main/main',{
          path : '/',
          title :'Calculator app'
     })
}