var express = require('express');
var router = express.Router();
var User = require('../../models/users_model');
var SessionClass = require('../../models/session_class_model');
var Class = require('../../models/class_model');
var Emitter = require('events');

router.get('/', function(req,res,next){
    User.find({role: 'student'}, function(err, students){
        if(err) throw err;
        res.json({error: false, message: students});
    })
});

router.get('/:session/superclass/:superclass', function (req,res,next) {
    var studentIds = [];
    var promises = [];
    var students = [];
    var studentsPromises = [];
    //get subclasses with given superclass
    Class.find({superclass: req.params.superclass}, function (err, classes) {
        if(err) throw err;
        for(var i=0; i<classes.length; i++){
            promises.push(getSessionClassesPromise(req, classes[i]._id));
        }
        Promise.all(promises).then(function(){
            for(dd in studentIds){
                studentsPromises.push(getStudentsPromises(studentIds[dd]));
            }
            Promise.all(studentsPromises).then(function(){
                res.json({error: false, message: students});
            })
        });
    });

    var getSessionClassesPromise = function(req, id){
        return new Promise(function(resolve){
            SessionClass.find({session: req.params.session, classId: id}, function(err, sessionclasses){
                if(err) throw err;
                for(var j=0; j<sessionclasses.length; j++){
                    for(var k=0; k<sessionclasses[j].students.length; k++){
                        studentIds.push(sessionclasses[j].students[k]);
                    }
                }
                resolve();
            });
        });
    };

    var getStudentsPromises = function(id){
        return new Promise(function(resolve){
            User.find({_id:id}, function(err, user){
                if(err) throw err;
                students.push(user[0]);
                resolve();
            });
        });
    };
});

router.get('/:session/:name', function (req,res,next) {
    //get subclasses with given superclass
    var students = [];
    var studentsPromises = [];
    Class.find({name: req.params.name}, function (err, clss) {
        if(err) throw err;
        if(clss.length < 1){
            res.json({error: true, message: "Class not found"});
            return;
        }
        SessionClass.find({session: req.params.session, classId: clss[0]._id}, function(err, sessionClasses){
           if(err){
               res.json({error: true, message: "Error occured while retrieving session class details"});
               return;
           }
           if(sessionClasses.length === 0) {
               res.json({error: true, message: "Selected class not found in the selected session"});
               return;
           }
           for(var i=0; i<sessionClasses[0].students.length; i++){
               studentsPromises.push(getStudentsPromises(sessionClasses[0].students[i]));
           }
           Promise.all(studentsPromises).then(function () {
               res.json({error: false, message: students});
           });
        });
    });

    var getStudentsPromises = function(id){
        return new Promise(function(resolve){
            User.find({_id: id}, function(err, user){
                if(err) throw err;
                students.push(user[0]);
                resolve();
            })
        })
    }
});

module.exports = router;