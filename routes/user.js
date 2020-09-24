const express = require('express')
const router=express.Router()
const {userSign}=require('../controllers/user')

router.get('/',userSign)

module.exports=router