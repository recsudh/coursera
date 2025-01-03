const express= require("express")
const user_routes= require("./route/user_routes")
const admin_routes= require("./route/admin_routes")
const course_routes= require("./route/course_routes")
// mondodb connection
const mongo = require("./db/mongo")

mongo()

const app = express()

app.use(express.json())
// console.log(req.body);
app.use("/api/v1/user",user_routes)
app.use("/api/v1/admin",admin_routes)
app.use("/api/v1/admin",course_routes)


const port = process.env.PORT

// app.get("/",(req,res)=>{
//     console.log(req.body);
// })

app.listen(port,()=>{
    console.log(`port is on at ${port}`);
})