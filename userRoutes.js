const registerUser=require('./userController');
const express=require('express');

const router=express.Router();

router.route("/api").post(registerUser)


module.exports=router;