var express = require('express');
var router = express.Router();
var SessionClass = require('../../models/session_class_model');
var ClassObject = require('../../models/class_model');

router.post('/add', function(req,res,data){
    var entry = {
        session: req.body.session,
        classId: req.body.classId
    };
    //check if the class already exists in the session
    SessionClass.find({session: entry.session, classId: entry.classId}, function(err, data){
        if(err){
            res.json({error: true, message: 'An error occured while checking for existing class in the session'});
            return;
        }
        if(data.length !== 0) {
            res.json({error: true, message: 'The class already exists in the selected session'});
            return;
        }
        // class will not exist at this point. Go ahead and create it
        SessionClass.create(entry, function(err, data){
            if(err){
                res.json({error: true, message: 'An error occured while creating the class for the selected session'});
                return;
            }
            res.json({error: false, message: 'Class created successfully for the '+entry.session+' session'});
            return;
        });
    })
});

// router.get('/:session', function(req,res,next){
//     SessionClass.find({session: req.params.session}, function(err, sessionClasses){
//         if(err){
//             res.json({error: true, message: 'An error occured while fetching the classes'});
//             return;
//         }
//         //classes found and their ids are accessible.
//         //need to get the classes themselves
//         var promises = [];
//         var classes = [];
//         for(var i=0; i<sessionClasses.length; i++) {
//             var p = new Promise(
//                 function(resolve, reject){
//                     ClassObject.findById(sessionClasses[i].classId, function(err, data){
//                         if(err){
//                             reject(err);
//                             res.json({error: true, message: 'Error occured while retrieving class name'});
//                             return;
//                         }
//                         classes.push(data);
//                         resolve();
//                     });
//                 }
//             );
//             promises.push(p);
//         }
//         Promise.all(promises).then(function(){
//             res.json({error: false, message: classes});
//         });
//     });
// });

router.get('/:session', function(req,res,next){
    SessionClass
        .find({session: req.params.session})
        .populate('classId teacher students')
        .exec(function(err, data){
            if(err) res.json({error: true, message: 'An error occured while fetching the classes'});;
            res.json({error: false, message: data});
        })
});

module.exports = router;