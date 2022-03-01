const mongoose=require("mongoose");
const url="mongodb://localhost:27017/userdata"
const connDatabase= () => {
    mongoose
    .connect(process.env.DATABASE ||url ,{
         useNewUrlParser:true,
         useUnifiedTopology:true,
    
        })
        .then(()=>{
    console.log("Connected to the MongoDb successfully");
})
}


module.exports=connDatabase;
