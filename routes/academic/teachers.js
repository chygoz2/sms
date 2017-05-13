var User = require('../../models/users_model');
var express = require('express');
var router = express.Router();
var SessionClass = require('../../models/session_class_model');
var SessionSubject = require('../../models/session_subject_model');

router.get('/', function(req,res,next){
    User.find({role: 'teacher'}).exec(function(err,data){
       if(err) res.json({error: true, message: 'Error occured while fetching teachers'});
       else res.json({error:false, message: data});
    });
});

router.get('/:teacher', function(req,res,next){
    User.find({role: 'teacher', _id: req.params.teacher}).exec(function(err,data){
        if(err) res.json({error: true, message: 'Error occured while fetching teacher details'});
        else res.json({error:false, message: data});
    });
});

router.post('/add', function(req,res,next){
   var d = {
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       email: req.body.email,
       password: req.body.password,
       role: 'teacher',
       id: req.body.id
   };

   //check if teacher with given email exists
    User.find({email: d.email}, function(err,data){
        if(err) res.json({error: true, message: 'Error occured while checking for duplicate email'});
        else if(data.length > 0) res.json({error: true, message: 'A user with the email address already exists'});
        //check if teacher with given id exists
        else{
            User.find({id: d.id}, function(err,data){
                if(err) res.json({error: true, message: 'Error occured while checking for duplicate ID'});
                else if(data.length > 0) res.json({error: true, message: 'A user with the ID already exists'});
                //no duplication found. Create new entry
                else{
                    User.create(d, function(err,data){
                        if(err) res.json({error: true, message: 'Error occured while creating new teacher'});
                        res.json({error:false, message: 'Teacher added successfully'});
                    });
                }
            });
        }
    });
});

router.put('/edit/:_id', function(req,res,next){
    var d = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role: 'teacher',
        id: req.body.id
    };

    //check if teacher with given email exists
    User.find({email: d.email, _id: {$ne: req.params._id}}, function(err,data){
        if(err) res.json({error: true, message: 'Error occured while checking for duplicate email'});
        else if(data.length > 0) res.json({error: true, message: 'A user with the email address already exists'});
        //check if teacher with given id exists
        else{
            User.find({id: d.id, _id: {$ne: req.params._id}}, function(err,data){
                if(err) res.json({error: true, message: 'Error occured while checking for duplicate ID'});
                else if(data.length > 0) res.json({error: true, message: 'A user with the ID already exists'});
                //no duplication found. Update existing entry
                else{
                    User.findByIdAndUpdate(req.params._id, d, function(err,data){
                        if(err) res.json({error: true, message: 'Error occured while updating teacher details'});
                        else if(data === null) res.json({error: true, message: "Teacher not found"});
                        else res.json({error:false, message: 'Teacher updated successfully'});
                    });
                }
            });
        }
    });
});

router.delete('/delete/:_id', function(req,res,next){
    User.remove({_id: req.params._id, role: 'teacher'}, function(err){
        if(err) res.json({error: true, message: 'Error deleting teacher'});
        else res.json({error:false, message: 'Teacher deleted successfully'});
    })
});

//get class teacher
router.get('/class/:class', function (req,res,next) {
    //check if class exists
    SessionClass.findById(req.params.class).populate('teacher students classId').exec(function(err,data){
        if(err){
            res.json({error: true, message: 'Error occured while fetching class'});
            return;
        }
        if(data == null){
            res.json({error: true, message: 'Class not found'});
            return;
        }
        res.json({error: false, message: data});
    });
});

//get subject teacher
router.get('/subject/:subject', function (req,res,next) {
    //check if subject exists
    SessionSubject.findById(req.params.subject).populate('teacher students subject').exec(function(err,data){
        if(err){
            res.json({error: true, message: 'Error occured while fetching subject'});
            return;
        }
        if(data == null){
            res.json({error: true, message: 'Subject not found'});
            return;
        }
        res.json({error: false, message: data});
    });
});

module.exports = router;