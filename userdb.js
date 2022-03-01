const mongoose=require("mongoose");
// const url="mongodb+srv://suren96:LgXBjGkeuVfM17ns@cluster0.lor5i.mongodb.net/userdata"
const connDatabase= () => {
    mongoose
    .connect(process.env.DATABASE,{
         useNewUrlParser:true,
         useUnifiedTopology:true,
    
        })
        .then(()=>{
    console.log("Connected to the MongoDb successfully");
})
}


module.exports=connDatabase;
