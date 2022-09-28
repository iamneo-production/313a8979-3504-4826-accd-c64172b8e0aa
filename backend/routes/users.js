const express = require('express');
const router = express.Router();
const db  = require('../model/database');

router.get('/users',(req,res)=>{
    const query = "select * from userModel";
    db.query(query,(err,res)=>{
        if(!err)
        {
            res.status(200).send(res);
        }
    })
})
router.get('/user/:id',(req,res)=>{
    const id = 
    const query = "select * form userModel where email = ?";
    db.query(query,(err,res)=>{
        if(!err)
        {
            res.status(200).send(res)
        }
    })
})