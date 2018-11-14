var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    urlImage: String,
    email: String,
    birthdate: String,
    question: String,
    password: String
});
var user = mongoose.model('user', userSchema);

//export default mongoose.model('user', User)