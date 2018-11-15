var mongoose = require('mongoose');

var crudSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:String
});

module.exports = mongoose.model('crud',crudSchema);