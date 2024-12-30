const mongoose = require("mongoose")

const userschema= mongoose.Schema({

})

const courseschema= mongoose.Schema({
    
})

const adminschema= mongoose.Schema({
    
})

const purchaseschema= mongoose.Schema({
    
})

const user = mongoose.model("user",userschema)
const admin = mongoose.model("user",adminschema)
const course = mongoose.model("user",courseschema)
const purchase = mongoose.model("user",purchaseschema)
