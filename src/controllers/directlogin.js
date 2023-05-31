const express=require('express')
const router=express.Router();
require('dotenv').config()
const jwt=require('jsonwebtoken')

router.post('/dirlogin',(req,res)=>{
    const username=req.body.username
    const user={name:username}
    const accessTocken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessTocken:accessTocken})
})
module.exports=router