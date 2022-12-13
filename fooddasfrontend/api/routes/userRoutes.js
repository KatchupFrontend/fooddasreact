const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')

const  User=require('../models/user')

router.post('/signup',async(req,res,next)=>{
    try {
        const {username,email,password,role}=req.body
        console.log(req.body);
        // const data=req.body
        if(!req.body){
            res.send(`Please fill the form`)
        }
        const hashPwd=await bcrypt.hash(password,12)
        const user=new User({
            username,
            email,
            password:hashPwd,
            role
        })
   await user.save()
   res.send(`User Created`)
    } catch (error) {
        console.log(error);
    }
    
})
router.post('/login',async(req,res,next)=>{
    try {
        const {email,password}=req.body
        if(!email||!password){
            res.send(`please fill in the required fields`)
        }
            const user=await User.findOne({email})
            if(!user){
                res.status(400).send(`wrong cred`);
            }else{

                const isMatch=await bcrypt.compare(password,user.password)
                if(!isMatch){
                    res.status(400).send(`wrong password or email`);
                }
                res.send(`login as ${user.username}`)
            }
        
    } catch (error) {
        console.log(error);
    }
    
})
module.exports=router