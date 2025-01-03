const express= require("express")
const {user_auth}= require("../middlewares/auth")
const purchase= require("../models/db")

const course_route = express.Router()

course_route.post("/purchase",user_auth,async (req,res)=>{
    try{
        const userId= req.userId
        const courseId = req.params._id

        const Purchase=  purchase(userId,courseId)
        await Purchase.save()
        res.status(200).send("Course Purchased!!")
        
    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})

course_route.get("/preview",async(req,res)=>{
    try{
        const course= await purchase.find({})
        if(course.length==0){
            throw new Error("No course found!!")
        }
        res.status(200).send(course)
    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})



module.exports=course_route