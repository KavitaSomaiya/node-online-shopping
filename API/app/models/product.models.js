
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    imgURL: String,
    name: String,
    price: String,
    retailPrice: String,
    discount: String,
    dataNumber: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)