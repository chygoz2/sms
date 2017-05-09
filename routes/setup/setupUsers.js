var Role = require('../../models/roles_model');
var User = require('../../models/users_model');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    //get role object for student
    Role.find({name: 'student'}, function(err, data){
        if(err) throw err;
        //create a user with role=student
        if(data.length > 0){
            var student = {
                firstname: 'Chigozie',
                lastname: 'Ekwonu',
                email: 'Chygoz2@gmail.com',
                password: '123456',
                role: 'student',
                id: '123456'
            };

            User.find({email: 'Chygoz2@gmail.com'}, function(err, users){
                if(users.length === 0){
                    User.create(student, function(err, result){
                        if(err) throw err;
                        res.json({error: false, message: result});
                    });
                }else{
                    res.json({error: false, message: users});
                }
            })
        }
    });
});

module.exports = router;

