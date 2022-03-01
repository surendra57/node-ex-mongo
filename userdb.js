const mongoose=require("mongoose");

const connDatabase= () => {
    mongoose
    .connect("process.env.MONGODB_URI || mongodb://localhost:27017/userData",{
         useNewUrlParser:true,
         useUnifiedTopology:true,
    
        })
        .then(()=>{
    console.log("Connected to the MongoDb successfully");
})
}


module.exports=connDatabase;
