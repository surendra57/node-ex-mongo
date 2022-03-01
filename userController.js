const Userdata=require("./userModel");
// console.log(Userdata);

const registerUser=async(req,res)=>{
    // const data =req.body;
    // console.log(data);
    const data=await Userdata.create(req.body)
    // console.log(data);  
    // const data = new Userdata(req.body)
	// const dara=await data.save()
    res.json({
        sucess:true,
        data
    })
}
module.exports =registerUser