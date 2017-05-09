var express = require('express');
var User = require('../models/users_model');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
  User.find({}, function(err, data){
    if(err) throw err;
    if(data){
      res.send({found: true, message: data});
    }else{
      res.send(404);
    }
  })
});

//get particular user
router.get('/:id', function(req, res, next) {
  User.find({_id: req.params.id}, function(err, user){
    if(err) throw err;
    if(user.length>0){
      res.send({found: true, message: user});
    }else{
      res.send(404);
    }
  });
});

//add user
router.post('/', function (req, res, next) {
  var user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      id: req.body.id,
      role: req.body.role
  };
  //check if email exists
    User.find({email: user.email}, function(err, data){
      if(err) throw err;
      if(data.length>0){
        res.send({error: true, message: 'email already exists'});
      }else{
        //check if id exists
        User.find({id: req.body.id}, function(err, data2){
          if(err) throw err;
          if(data2.length>0){
            res.send({error: true, message: 'id already exists'});
          }else{
            User.create(user, function(err, data3){
                if(err) throw err;
                res.send({error: false, message: data3});
            })
          }
        })
      }
    })
});

//modify user
router.put('/:id', function(req, res, next){
  User.findById(req.params.id, function (err, data) {
      if(err) throw err;
      if(req.body.firstname !== undefined) data.firstname = req.body.firstname;
      if(req.body.lastname !== undefined) data.lastname = req.body.lastname;
      if(req.body.email !== undefined) data.email = req.body.email;
      if(req.body.role !== undefined) data.role = req.body.role;
      if(req.body.id !== undefined) data.id = req.body.id;
      data.save(function(err){
        if(err) res.json({error: true, message: err});
        res.json({error: false, message: 'success'});
      });
  })
});

//delete user
router.delete('/:id', function(req,res,next){
  User.findById(req.params.id, function(err, data){
    if(err) throw err;
    // res.json(data);
    User.remove({_id: req.params.id}, function(err){
      if(err) throw err;
      res.json({err: false, message: true});
    })
  });
});

module.exports = router;
