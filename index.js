const  express =require('express')
const mongoose = require('mongoose');
const dotenv= require('dotenv')
dotenv.config({ path: './.env' });
const url= process.env.url
console.log(url)
 var move= require("./move")
mongoose.connect(url,(err,res)=>{
  if(err)
  console.log(err)
  else
  console.log('done')
})
 



var app= express()

app.get('/search',(req,res)=>{
  
 q=req.query.name
 console.log(q)
  move.find({name:{$regex:q}},(err,data)=>{
    if(err)
    res.send(err)
    else
    res.send(data)
    
  })
  
  
      // res.send("youare in the moveapp")
  })
app.get('/',(req,res)=>{
  

move.find((err,data)=>{
  if(err)
  res.send(err)
  else
  res.send(data)
  
})


    // res.send("youare in the moveapp")
})





app.listen(3000,(err)=>{
    
   if(err)
    console.log(err)
   else
 console.log("server is started")
})