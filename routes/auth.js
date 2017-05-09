var express = require('express');
var router = express.Router();
var User = require('../models/users_model');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.post('/login', function(req,res,next){
    User.findOne({email: req.body.email}, function(err, user){
        if(err) throw err;
        if(!user){
            res.json({error: true, message: 'User not found'});
        }else{
            if(user.password != req.body.password){
                res.json({error: true, message: 'Invalid email/password'});
            }else{
                var token = jwt.sign(user, config.secret);
                res.json({error: false, message: 'Login success', token: token, user: user});
            }
        }
    });
});

module.exports = router;