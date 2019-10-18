
const mongoose = require('mongoose')

const cartItemSchema = mongoose.Schema({
    indexImgUrl: String,
    name: String,
    quantity: String,
    sellerName: String,
    price: String,
    retailPrice: String,
    offersApplied: String,
    dataNumber: String,
    deliveryDate: String
}, {
    timestamps: true
})

module.exports = mongoose.model('CartItems', cartItemSchema)