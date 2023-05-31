const express=require('express')
const app=express()
const getpost=require('./src/controllers/getpost')
const directlogin=require('./src/controllers/directlogin')
const posttoken=require('./src/controllers/posttoken')
const postlogin=require('./src/controllers/postlogin')
const deletelogout=require('./src/controllers/deletelogout')


app.use(express.json())
app.use(getpost)
app.use(directlogin)
app.use(posttoken)
app.use(postlogin)
app.use(deletelogout)






app.listen(3000,()=>{
    console.log('running on server in 3000 port')
})