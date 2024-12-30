const mongoose= require("mongoose")

function main(){
    const connect = mongoose.connect(process.env.MONGO)
    if(connect){
        console.log("Mongo db connected !!");
    }
}

module.exports= main