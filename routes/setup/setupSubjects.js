var Subject = require('../../models/subject_model');
var express = require('express');
var router = express.Router();

var subjects = [
    {
        id: 'eng101',
        name: 'English'
    },
    {
        id: 'math101',
        name: 'Mathematics'
    }
];

router.get('/', function(req, res, next){
    Subject.find({}, function(err, data){
        if(err) throw err;
        if(data.length !== subjects.length){
            Subject.create(subjects, function(err, data){
                if(err) throw err;
                res.json({error: false, message: data});
            })
        }else{
            res.json({error: false, message: data});
        }
    })
})

module.exports = router;

