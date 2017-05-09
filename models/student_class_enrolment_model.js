var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users_model');
var SessionClass = require('./session_class_model');

var schema = new Schema({
    student: {type: Schema.Types.ObjectId, ref: 'User'},
    session_class: {type: Schema.Types.ObjectId, ref: 'SessionClass'}
});

module.exports = mongoose.model('StudentClassEnrolment', schema);