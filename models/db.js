const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const objectid= mongoose.Schema.Types.ObjectId

const userschema= new  mongoose.Schema({
    email:String,
    password:String,
    first_name: String,
    last_name:String

})

const courseschema=new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:objectid
    
})

const adminschema=new mongoose.Schema({
    email:String,
    password:String,
    first_name: String,
    last_name:String
    
})

const purchaseschema= new mongoose.Schema({
    userid:objectid,
    courseid:objectid
})



// middlewres for users
adminschema.pre("save",async function(next){
    const admin = this
    if(admin.isModified("password")){
         admin.password= await bcryptjs.hash(admin.password,8)
    }
    next()
})


const user = mongoose.model("user",userschema)
const admin = mongoose.model("admin",adminschema)
const course = mongoose.model("course",courseschema)
const purchase = mongoose.model("purchase",purchaseschema)


module.exports={
    user,
    admin,
    course,
    purchase
}