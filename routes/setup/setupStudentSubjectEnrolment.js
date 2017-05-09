var express = require('express');
var router = express.Router();
var StudentSubjectEnrolment = require('../../models/student_subject_enrolment_model');
var SessionSubject = require('../../models/session_subject_model');

router.get('/', function(req,res,next){
    SessionSubject.find({}, function(err,data){
        if(err) throw err;
        var sse = [];
        for(var i=0; i<data.length; i++){
            var ob = {};
            ob.student = '123456';
            ob.session_subject = data[i]['_id'];
            sse.push(ob);
        }
        StudentSubjectEnrolment.find({}, function(err, data){
            if(err) throw err;
            if(data.length == 0){
                StudentSubjectEnrolment.create(sse, function(err,data){
                    if(err) throw err;
                    res.json({error: false, message: data});
                });
            }else{
                res.json({error: false, message: data});
            }
        })
    })
});

module.exports = router;
