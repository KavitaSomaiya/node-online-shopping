
const mongoose = require('mongoose')

const cartItemSchema = mongoose.Schema({
    cartProducts: {type: mongoose.Schema.Types.ObjectId, ref:'products'},
    productId: String,
    quantity: String,
    offersApplied: String,
    deliveryDate: String,
    userId: String
}, {
    timestamps: true
})

module.exports = mongoose.model('CartItems', cartItemSchema)






// const Schema = mongoose.Schema

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

// module.exports = mongoose.model('cartProducts', cartProductSchema)