var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    name: String,
    id: String
});

module.exports = mongoose.model('Subject', subjectSchema);