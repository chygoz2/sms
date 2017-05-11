var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    name: {type: String, required: true},
    id: {type: String, required: true}
});

module.exports = mongoose.model('Subject', subjectSchema);