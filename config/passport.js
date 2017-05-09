var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users_model');

module.exports = function(passport){
    // used to serialize the user for the session
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        })
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password){
        process.nextTick(function(){
            User.findOne({'email': email}, function(err, user){
                if(err) return done(err);
                if(user){
                    return done(null, false, req.flash('signupMessage', 'That email is already taken'));
                }else{
                    var newUser = new User();
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.save(function(err){
                        if(err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
};