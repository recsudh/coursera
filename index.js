const express= require("express")
const user_routes= require("./route/user_routes")
const admin_routes= require("./route/admin_routes")

const app = express()

app.use(express.json())
app.use("/api/v1/user",user_routes)
app.use("/api/v1/admin",admin_routes)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`port is on at ${port}`);
})