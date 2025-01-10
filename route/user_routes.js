const express= require("express")
const {user} = require("../models/db")
const bcryptjs= require("bcryptjs")
const jwt = require("jsonwebtoken")
const {check,login_check} = require("../middlewares/input_validation")

const user_route = express.Router()

// route.post()
user_route.post("/signup", check ,async(req,res,next)=>{
    try{
        // console.log(req.body);
        const User = await user(req.body)
        // console.log(user);
        await User.save()
        res.status(201).send(User)

    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})


user_route.post("/signin",login_check,async (req,res)=>{
    try{
        console.log(req.body);
        const {email,password}= req.body
        const User = await user.findOne({email})
        if(!User){
            throw new Error("No user found!!")
        }
        const is_match = await bcryptjs.compare(password,User.password)
        if(!is_match){
            throw new Error("Invalid password!")
        }
        console.log(process.env.user_SK);
        const token = jwt.sign({_id:User._id},process.env.USER_SK)
        console.log(token);
        res.status(200).send(token)

    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})


module.exports= user_route