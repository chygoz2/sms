var mongoose = require('mongoose');

var Schema = mongoose.Schema

var roleSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Role', roleSchema);