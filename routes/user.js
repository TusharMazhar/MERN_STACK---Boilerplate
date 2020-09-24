const express = require('express')
const router=express.Router()
const {userSign,userLogin}=require('../controllers/user')

router.post('/register',userSign)
router.post('/login',userLogin)

module.exports=router