module.exports = (app) => {
    const products = require('../controllers/product.controller');

    // Create a new User
    app.post('/products', products.create);

    // Retrieve all User
    app.get('/products', products.findAll);

    // Retrieve a single user with userId
    app.get('/products/:productId', products.findOne);

    // Update a User with userId
    app.put('/products/:productId', products.update);

    // Delete a User with userId
    app.delete('/products/:productId', products.delete);
}