var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Role = require('./roles_model');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: String,
    id: String
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var userModel = mongoose.model('User', userSchema);
module.exports = userModel;