var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    date: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    status: {type: String, required: true},
    size:{type: String, required: true},
    number:{type: String, required: true},
    tsize:{type: String, required: true},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Table', schema);