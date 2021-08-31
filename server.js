const express=require('express');
const app=express();
app.use(express.json());
app.get('/first-route',(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:'Your Route Called Successfully'
    })
})
app.get('/user-profile',(req,res,next)=>{
    const user=req.query.user
    res.status(200).json({
        success:true,
        message:`Your are logged in as ${user}`
    })
})
app.get('/user/:id',(req,res,next)=>{
console.log({req})
    const user=req.params.id
    res.status(200).json({
        success:true,
        message:`Your are logged in as ${user}`,
        req:req.query
    })
})
app.post('/save-user',(req,res,next)=>{
    const {firstName,lastName}=req.body;
    console.log({firstName,lastName});
    res.status(200).json({
        firstName,
        lastName
    })
})
app.listen(3001,()=>{
    console.log('server is up and runing')
})