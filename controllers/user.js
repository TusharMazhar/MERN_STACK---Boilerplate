const express=require('express')
const User=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const {registerValidation,loginValidation}=require('../userValidation/validation')

const userSign=async(req,res)=>{

    const{error}=registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    const emailExists= await User.findOne({email:req.body.email})
    if(emailExists) return res.status(400).send('Email Exists,Try differnet email address')
    const phone= await User.findOne({phone:req.body.phone})
    if(phone) return res.status(400).send('phone number Exists,Try differnet phone number address')
    const salt= await bcrypt.genSalt(12);
    const hashPassword= await bcrypt.hash(req.body.password,salt)


    const user=new User({

        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        password:hashPassword



    });
    try{

        const userData=await user.save()
        //res.status(201).send({user:user._id})
        res.send("New User Created Successfully!")

    }catch(err){

        res.status(400).send('User Registration failed')

    }

}
const userLogin=async(req,res)=>{

    const{error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    const phoneExists= await User.findOne({phone:req.body.phone})
    if(!phoneExists) return res.status(400).send('Phone Number  not Found')
    
    const validPass=await bcrypt.compare(req.body.password,phoneExists.password)
    if(!validPass) return res.status(400).send('Password  is wrong')


    //res.status(201).send(" Logged in!,welcome to this portal")

    const token=jwt.sign({ _id: User._id},process.env.SECRET_KEY)
    res.header('auth-token',token).send(token);

}
module.exports={userSign,userLogin}
