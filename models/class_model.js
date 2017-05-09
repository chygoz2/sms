var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
    name: String,
    superclass: String,
    id: String
});

module.exports = mongoose.model('Class', classSchema);