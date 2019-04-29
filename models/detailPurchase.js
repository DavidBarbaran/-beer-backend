var mongoose = require('mongoose');

var detailPurchaseSchema = mongoose.Schema({
    cantidad: String,
    items: Array
});
var purchase = mongoose.model('detailPurchase', detailPurchaseSchema);