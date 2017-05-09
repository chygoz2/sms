var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    student: String,
    session_class: String
});

module.exports = mongoose.model('StudentClassEnrolment', schema);