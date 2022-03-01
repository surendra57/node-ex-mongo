const express=require('express');
const path=require('path')
const bodyParser=require('body-parser');
const router=require("./userRoutes");
// const mongoose=require("mongoose");
const connDatabase=require('./userdb');

const app=express();
const port=process.env.PORT || 8800;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(router);
 
//connect the database
connDatabase();


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname +"/index.html"));
    // res.json("hello-") 
})



app.listen(port,()=>{
    console.log("server is working on 8800")
})