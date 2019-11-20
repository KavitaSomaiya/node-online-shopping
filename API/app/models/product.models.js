
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    indexImgUrl: String,
    name: String,
    sellerName: String,
    price: String,
    retailPrice: String,
    discount: String,
    className: String,
    dataNumber: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)