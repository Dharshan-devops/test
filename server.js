const express=require("express")
const bodyparser=require("body-parser")

const app=express()
app.use(bodyparser())
app.get("/register",(req,res)=>{
    let data=req.body
    console.log(data)
})

app.listen(3000,()=>{
    console.log("Server listening on 3000")
})


