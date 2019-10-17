const mongoose = require('mongoose');

const UserSchemaa = mongoose.Schema({
    ImgURL: String,
    name: String,
    price: String,
    retailPrice: String,
    discount: String,
    className: String,
    dataNumber: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', UserSchemaa);