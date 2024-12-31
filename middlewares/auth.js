const jwt = require("jsonwebtoken")

async function auth (){
    const token = await req.headers("Authorization").replace("Bearer ","")
    const compare = jwt.verify=(token,process.env.SECRET_KEY)
    
}