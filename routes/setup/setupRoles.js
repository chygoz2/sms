var Role = require('../../models/roles_model');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var config = require('../../config');

var roles = [
    {name: 'student'},
    {name: 'teacher'},
    {name: 'parent'},
    {name: 'admin'}
];

router.get('/', function(req, res, next){
    Role.find({}, function(err, results){
       if(results.length !== roles.length){
           Role.create(roles, function(err, data){
               if(err) throw  err;
               res.json({error: false, message: data});
           })
       }else{
           res.json({error: false, message: results});
       }
    });
});

module.exports = router;

