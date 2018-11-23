//var mongoose = require('mongoose');
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var purchaseSchema = mongoose.Schema({
    userId: String
});

var detailPurchaseSchema = mongoose.Schema({
    idPurchase : { type: Schema.Types.ObjectId,  ref: 'purchase' },
    cantidad: String,
    item: { type: Schema.Types.ObjectId,  ref: 'drink' }
});

var detailPurchase = mongoose.model('detailPurchase', detailPurchaseSchema);
var purchase = mongoose.model('purchase', purchaseSchema);