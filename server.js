const express=require('express')
const hbs=require('hbs')
const app = express()

app.use(express.static('public'));

app.set('view engine',hbs)

//middleware
const timerequest = (req,res,next)=>{
  /*  if ( Date().split(" ")[0] =="Sat" ||Date().split(" ")[0] =="Sun" || Date().split(" ")[4].split(':')[0] >17||Date().split(" ")[4].split(':')[0]<9){
    
       res.send(" The web application is only available in working time (Monday to Friday,  from 9 to 17) ")
      
    }
   else */
    next()
}
app.use(timerequest)

app.get('/',(req,res)=>{
    
    res.render('Home.hbs')
    
    
})
app.get('/contact',(req,res)=>{
    res.render('Contact.hbs')
})
app.get('/service',(req,res)=>{
    res.render('Services.hbs')
})

app.listen(1506,(err)=>{
if (err) console.log(err)
else console.log("the server is running on the port 1406")

})