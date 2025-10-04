exports.errrHundler = (req,res,next)=>{
res.status(404).render('main/404',{
     title : "Page not Found",
     path : ''
})
}