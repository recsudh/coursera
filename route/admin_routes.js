const express= require("express")
const {admin} = require("../models/db")
const bcryptjs= require("bcryptjs")
const jwt = require("jsonwebtoken")

const admin_route = express.Router()


admin_route.post("/signup",async(req,res,next)=>{
    try{
        // console.log(req.body);
        const Admin = await admin(req.body)
        // console.log(Admin);
        await Admin.save()
        res.status(201).send(Admin)

    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})


admin_route.post("/signin",async (req,res)=>{
    try{
        console.log(req.body);
        const {email,password}= req.body
        const Admin = await admin.findOne({email})
        if(!Admin){
            throw new Error("No admin found!!")
        }
        const is_match = await bcryptjs.compare(password,Admin.password)
        if(!is_match){
            throw new Error("Invalid password!")
        }
        console.log(process.env.ADMIN_SK);
        const token = jwt.sign({_id:Admin._id},process.env.ADMIN_SK)
        console.log(token);
        res.status(200).send(token)

    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})

module.exports= admin_route