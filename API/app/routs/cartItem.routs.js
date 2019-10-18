
module.exports = (app) => {
    const cartItems = require('../controllers/cartItem.controller')
    app.post('/cartItems', cartItems.create)
    app.get('/cartItems', cartItems.findAll)
    app.get('/cartItems/:cartItemId', cartItems.findOne)
    app.put('/cartItems/:cartItemId', cartItems.update)
    app.delete('/cartItems/:cartItemId', cartItems.delete)
}