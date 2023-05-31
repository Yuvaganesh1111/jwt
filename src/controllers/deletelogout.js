const express=require('express')
const router=express.Router();
const schema=require('../models/schema')
let refreshTokens=schema.refreshTokens;


router.delete('/logout',(req,res)=>{
    
    refreshTokens.refresh=refreshTokens.refresh.filter(token=>token!== req.body.token)
    res.sendStatus(204);
    


})

module.exports=router;