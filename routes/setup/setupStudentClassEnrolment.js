var express = require('express');
var router = express.Router();
var StudentClassEnrolment = require('../../models/student_class_enrolment_model');
var SessionClass = require('../../models/session_class_model');

router.get('/', function(req,res,next){
    var v = [
        {
            session: '2016-2017',
            classId: '58ff8e7c7933ed1fc8bf7172',
            students: ['58ff4d01366b9225604bf2de']
        },
        {
            session: '2016-2017',
            classId: '58ff8e7c7933ed1fc8bf7173',
            students: ['58ff7f47336b63321883c057']
        }
    ];

    SessionClass.create(v, function (err, data) {
        if (err) throw err;
        for(var i=0; i<data.length; i++){
            StudentClassEnrolment.create({student: data[i].students[0], session_class: data[i]._id}, function (err) {
                if(err) throw err;
            });
        }
    });

    res.json({error: false, message: 'Success'});
});

module.exports = router;
