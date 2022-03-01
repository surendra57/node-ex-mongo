const mongoose=require('mongoose')
const userdata=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Userdata= new mongoose.model("personal",userdata)
module.exports =Userdata;