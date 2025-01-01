const jwt = require("jsonwebtoken")
const {user,admin}= require("../models/db")

async function user_auth (req,res,next){
    const token = await req.headers("Authorization").replace("Bearer ","")
    const decode = jwt.verify(token,process.env.USER_SK)
    if(decode){
        req.userId= decode._id
        next()
    }
    else{
        req.status(500).send("Wrong auth code !!")
    }
    
}

// admin
async function admin_auth (req,res,next){
    const token = await req.header("Authorization").replace("Bearer ","")
    console.log(token);
    const decode = jwt.verify(token,process.env.ADMIN_SK)
    console.log(decode);
    if(decode){
        req.adminId= decode._id
        next()
    }
    else{
        req.status(500).send("Wrong auth code !!")
    }
    
}

module.exports={
    user_auth,
    admin_auth
}