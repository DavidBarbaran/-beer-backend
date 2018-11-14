var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: String,
    value: String
});
var category = mongoose.model('category', categorySchema);