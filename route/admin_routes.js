const express= require("express")
const {admin} = require("../db/mongo")

const admin_route = express.Router()


admin_route.post("/signup",async(req,res,next)=>{
    try{
        console.log(req.body);
        const Admin = await admin(req.body)
        console.log(Admin);
        await Admin.save()
        res.status(201).send(Admin)

    }catch(e){
        res.status(500).send(e)
    }
})


module.exports= admin_route