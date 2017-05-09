var SessionSubject = require('../../models/session_subject_model');
var express = require('express');
var router = express.Router();

var sc = [
    {
        session: '2016-2017',
        subject: 'math101',
        teacher: 'Monsieur',
        students: [
            '123457'
        ]
    },
    {
        session: '2016-2017',
        subject: 'eng101',
        teacher: 'Madame',
        students: [
            '123457'
        ]
    }
];

router.get('/', function(req,res,next){
    SessionSubject.find({}, function(err, data){
        if(err) throw err;
        if(data.length !== sc.length){
            SessionSubject.remove({}, function(err){});
            SessionSubject.create(sc, function (err, data) {
                if(err) throw err;
                res.json({'error': false, 'message': data});
            })
        }else{
            res.json({'error': false, 'message': data});
        }
    })
});

// router.get('/id', function(req,res,next){
//     SessionClass.find({})
// })

module.exports = router;