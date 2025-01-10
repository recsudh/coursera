const {z}= require("zod")

function check(req,res,next){
    const requirebody= z.object({
        email:z.string().email(),
        password:z.string().min(5),
        first_name: z.string().min(5),
        last_name:z.string()
      })
  
      const parsedata= requirebody.safeParse(req.body)
      console.log(parsedata);
      if(!parsedata.success){
        return res.json({
          result: "failed",
          Error:parsedata.error
        })
      }
      next()
}

function login_check(req,res,next){
    const requirebody= z.object({
        email:z.string().email(),
        password:z.string().min(5),
    })
    const parsedata= requirebody.safeParse(req.body)
      console.log(parsedata);
      if(!parsedata.success){
        return res.json({
          result: "failed",
          Error:parsedata.error
        })
      }
      next()
}

module.exports= {check,login_check}