const mongoose = require("mongoose")


const objectid= mongoose.Schema.Types.ObjectId

const userschema= mongoose.Schema({
    email:String,
    password:String,
    first_name: String,
    last_name:String

})

const courseschema= mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:objectid
    
})

const adminschema= mongoose.Schema({
    email:String,
    password:String,
    first_name: String,
    last_name:String
    
})

const purchaseschema= mongoose.Schema({
    userid:objectid,
    courseid:objectid
})

const user = mongoose.model("user",userschema)
const admin = mongoose.model("user",adminschema)
const course = mongoose.model("user",courseschema)
const purchase = mongoose.model("user",purchaseschema)
