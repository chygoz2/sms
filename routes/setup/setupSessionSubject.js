var SessionSubject = require('../../models/session_subject_model');
var express = require('express');
var router = express.Router();

var sc = [
    {
        session: '2016-2017',
        subject: '59005a0e58110116acf65c41',
        teacher: '5913200fe2fb828886c710c9',
        students: [
            '58ff4d01366b9225604bf2de'
        ]
    },
    {
        session: '2016-2017',
        subject: '59005a0e58110116acf65c41',
        teacher: '59132026e2fb828886c710ca',
        students: [
            '58ff7f47336b63321883c057'
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