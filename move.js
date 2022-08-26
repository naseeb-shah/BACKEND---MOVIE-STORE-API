 const mongoose = require('mongoose');


 var mov= mongoose.Schema

 var move= new mov({
    name:String


 })

 const movies= mongoose.model('move',move)
 module.exports=movies