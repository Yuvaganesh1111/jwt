const express=require('express')
const router=express.Router();
require('dotenv').config()
const jwt=require('jsonwebtoken')
const schema=require('../models/schema')
let refreshTokens=schema.refreshTokens;
const generateAccessToken=require('../middleware/gentoken')

router.post('/login',(req,res)=>{
    const username=req.body.username
    const user={name:username}
    const accessToken=generateAccessToken(user)
    const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.refresh.push(refreshToken)
    res.json({accessToken:accessToken,refreshToken:refreshToken})
})
module.exports=router;