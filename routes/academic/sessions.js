var express = require('express');
var router = express.Router();
var SessionClass = require('../../models/session_class_model');

router.get('/', function (req,res,next) {
    var distinctSessions = [];
    SessionClass.find({}, function(err, data){
        if(err) throw err;
        var promise = new Promise(function(resolve){
            for(var i=0; i<data.length; i++){
                if(distinctSessions.indexOf(data[i].session) === -1){
                    distinctSessions.push(data[i].session);
                }
            }
            resolve();
        });
        promise.then(function(){
            res.json({error: false, message: distinctSessions});
        });
    });
});

module.exports = router;