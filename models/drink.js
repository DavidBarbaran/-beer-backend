var mongoose = require('mongoose');

var drinkSchema = mongoose.Schema({
    category: String,
    description: String,
    image: String,
    isOffer: Boolean,
    name: String,
    offer: Number,
    price: Number
});
mongoose.model('drink', drinkSchema);