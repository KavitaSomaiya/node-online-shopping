
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const cartProductSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     indexImgUrl: String,
//     name: String,
//     price: String,
//     retailPrice: String,
//     discount: String,
//     className: String,
//     dataNumber: String
// }, {
//     timestamps: true
// })

const cartItemSchema = Schema({
    cartProducts: [{type: Schema.Types.ObjectId, ref:'products'}],
    quantity: String,
    sellerName: String,
    offersApplied: String,
    deliveryDate: String
}, {
    timestamps: true
})

module.exports = mongoose.model('CartItems', cartItemSchema)
// module.exports = mongoose.model('cartProducts', cartProductSchema)