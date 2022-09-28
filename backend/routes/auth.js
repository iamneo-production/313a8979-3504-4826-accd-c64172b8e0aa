const express = require('express');
const router = express.Router();
const db  = require('../model/database');
const { signupValidation, loginValidation } = require('../validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post('/signup', signupValidation, (req, res, next) => {
    console.log("called signup")
    db.query(`SELECT * FROM userModel WHERE LOWER(email) = LOWER(${db.escape(
    req.body.email
    )});`, 
        (err, result) => {
        if (result.length) {
        return res.status(409).json({
                msg: 'This user is already in use!'
        });
    } 
    else {
    // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            console.log(err)
            return res.status(500).send({
            msg: err
        });
    } 
    else {
    // has hashed pw => add to database
        db.query(
        `INSERT INTO userModel ( email, password,username,mobileNumber,active,role) VALUES ( ${db.escape(req.body.email)},
                ${db.escape(hash)},'${req.body.userName}',${req.body.mobileNumber},${req.body.active},"${req.body.role}")`,(err, result) => {
        if (err) {
                console.log(err);
                return res.status(400).json({err});
        }
        return res.status(201).json({
            message: 'The user has been registerd with us!'
        });
        }
    );
    }
    });
    }
    }
    );
});
router.post('/login', loginValidation, (req, res, next) => {
    console.log("Called Login" )
    db.query(
        `SELECT * FROM userModel WHERE email = ${db.escape(req.body.email)};`,
            (err, result) => {
            // user does not exists
             if (err) {
                return res.status(400).send({msg: err});
        }
        if (!result.length) {
            console.log("wrong password")
        return res.status(401).send({
        msg: 'Email or password is incorrect!'
    });
    }
    // check password
    bcrypt.compare(
              req.body.password,result[0]['password'],(bErr, bResult) => {
            // wrong password
             if (bErr) {
                    return res.status(401).send({
                    msg: 'Email or password is incorrect!'
        });
    }
    if (bResult) {
        const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
        console.log(token)
        return res.status(200).json({
            msg: 'Logged in!',
            token,
            email: result[0].email,
            roles : result[0].role
        });
     }
     return res.status(401).send({msg: 'Username or password is incorrect!'}); });
    }
    );
});
router.post('/get-user', signupValidation, (req, res, next) => {
    if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer') || !req.headers.authorization.split(' ')[1])
        {
        return res.status(422).json({
        message: "Please provide the token",
     });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query('SELECT * FROM userModel where id=?', decoded.id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'Fetch Successfully.' });
    });
});
module.exports = router