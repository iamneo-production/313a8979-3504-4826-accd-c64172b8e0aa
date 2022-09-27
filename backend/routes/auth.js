const express = require('express');
const { loginValidation } = require('../validation');
const router = express.Router()

router.post('/login',loginValidation,(req,res,next)=>{
    const {email,password} = req.body;
    


})
router.post('/signup',(req,res)=>{
    const { email , username , phonenumber , password} = req.body;
    
})

