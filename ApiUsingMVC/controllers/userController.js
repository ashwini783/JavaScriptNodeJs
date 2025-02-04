const userModel=require('../models/userModel')

const createUser=async(req,res)=>{
    const{name,email}=req.body;
    try{
        console.log("in create user")
           const user = await userModel.create({name:name,email:email});
           console.log("user",user)
           res.status(200).json({message:"user created",user})
    }
    catch(err){
           console.log(err)
           return res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports={createUser}