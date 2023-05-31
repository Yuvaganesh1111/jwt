const express=require('express')
const router=express.Router();
const schema=require('../models/schema')
const posts=schema.posts;
const authenticateToken=require('../middleware/authtoken')

router.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post=>post.username===req.user.name))
    
})

module.exports=router;