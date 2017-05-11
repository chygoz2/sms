var Subject = require('../../models/subject_model');
var express = require('express');
var router = express.Router();
var SessionSubject = require('../../models/session_subject_model');

router.get('/', function(req,res,next){
    //get all subjects
    Subject.find({}, function(err,data){
        if(err) res.json({error:true, message:'Error occured while fetching classes'})
        res.json({error:false, message:data});
    })
});

router.get('/:session', function(req,res,next){
    SessionSubject.find({session: req.params.session})
        .populate('subject teacher students assessments')
        .exec(function(err, data){
            if(err) {
                console.log(err);
                res.json({error: true, message: 'Error occured while fetching subjects'})
            }
            res.json({error: false, message: data});
        })
});

router.post('/add', function(req,res,next){
    //check if a subject with given id already exists
    Subject.find({id: req.body.id}, function(err, data){
        if(err) res.json({error: true, message: 'Error occured while checking for subject code existence'})
        if(data.length > 0){
            res.json({error: true, message: 'A subject with the provided subject code already exists'});
        }
        else{
            Subject.create({name: req.body.name, id: req.body.id}, function(err,data){
                if(err) res.json({error: true, message: 'Error occured while submitting form'})
                res.json({error: false, message: data});
            });
        }
    })
})

module.exports = router;