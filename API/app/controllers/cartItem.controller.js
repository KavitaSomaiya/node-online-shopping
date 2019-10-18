
const CartItem = require('../models/cartItem.models')

// Create and Save a new Product
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: 'cart Item name cannot be empty.'
    })
  }
  const cartItem = new CartItem({
    indexImgUrl: req.body.indexImgUrl,
    name: req.body.name,
    quantity: req.body.quantity,
    sellerName: req.body.sellerName,
    price: req.body.price,
    retailPrice: req.body.retailPrice,
    offersApplied: req.body.offersApplied,
    dataNumber: req.body.dataNumber,
    deliveryDate: req.body.deliveryDate
  })
  console.log(cartItem)
  console.log(req.body.cartItem)
  cartItem.save()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the cart item.'
      })
    })
}

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
  CartItem.find()
    .then(cartItems => {
      res.send(cartItems)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving cart items.'
      })
    })
}

exports.findOne = (req, res) => {
  CartItem.findById(req.params.cartItemId)
    .then(cartItem => {
      if (!cartItem) {
        return res.status(404).send({
          message: 'Cart item not found with ID' + req.params.cartItemId
        })
      }
      res.send(cartItem)
    })
    .catch(err => {
      if (err.king === 'ObjectId') {
        return res.status(404).send({
          message: 'Cart item not found with ID' + req.params.cartItemId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving cart item with ID' + req.params.cartItemId
      })
    })
}


exports.update = (req, res) => {
  console.log(req.body)
  if(!req.body) {
      return res.status(400).send({
          message: "Cart item content can not be empty"
      })
  }
  CartItem.findByIdAndUpdate(req.params.cartItemId, {
    indexImgUrl: req.body.indexImgUrl,
    name: req.body.name,
    quantity: req.body.quantity,
    sellerName: req.body.sellerName,
    price: req.body.price,
    retailPrice: req.body.retailPrice,
    offersApplied: req.body.offersApplied,
    dataNumber: req.body.dataNumber,
    deliveryDate: req.body.deliveryDate
  }, {new: true})
  .then(cartItem => {
      if(!cartItem) {
          return res.status(404).send({
              message: "Cart item not found with ID " + req.params.cartItemId
          })
      }
      res.send(cartItem)
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Cart Item not found with ID " + req.params.cartItemId
          })           
      }
      return res.status(500).send({
          message: "Error updating cart item with ID " + req.params.cartItemId
      })
  })
}

exports.delete = (req, res) => {
  CartItem.findByIdAndRemove(req.params.cartItemId)
  .then(cartItem => {
      if(!cartItem) {
          return res.status(404).send({
              message: "cart item not found with id " + req.params.cartItemId
          })
      }
      res.send({message: "Cart item deleted successfully!"})
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Cart item not found with id " + req.params.cartItemId
          })
      }
      return res.status(500).send({
          message: "Could not delete cart item with id " + req.params.cartItemId
      })
  })
}

// const Product = require('../models/product.models')

// // Create and Save a new Product
// exports.create = (req, res) => {
//   if (!req.body.name) {
//     return res.status(400).send({
//       message: 'Product name cannot be empty.'
//     })
//   }
//   const product = new Product({
//     indexImgUrl: req.body.indexImgUrl,
//     name: req.body.name,
//     price: req.body.price,
//     retailPrice: req.body.retailPrice,
//     discount: req.body.discount,
//     className: req.body.className,
//     dataNumber: req.body.dataNumber
//   })
//   console.log(product)
//   console.log(req.body.product)
//   product.save()
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || 'Some error occured while creating the Product.'
//       })
//     })
// }

// // Retrieve and return all products from the database.
// exports.findAll = (req, res) => {
//   Product.find()
//     .then(products => {
//       res.send(products)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || 'Some error occured while retrieving products.'
//       })
//     })
// }

// exports.findOne = (req, res) => {
//   Product.findById(req.params.productId)
//     .then(product => {
//       if (!product) {
//         return res.status(404).send({
//           message: 'Product not found with ID' + req.params.productId
//         })
//       }
//       res.send(product)
//     })
//     .catch(err => {
//       if (err.king === 'ObjectId') {
//         return res.status(404).send({
//           message: 'Product not found with ID' + req.params.productId
//         })
//       }
//       return res.status(500).send({
//         message: 'Error retrieving product with ID' + req.params.productId
//       })
//     })
// }


// exports.update = (req, res) => {
//   console.log(req.body)
//   if(!req.body) {
//       return res.status(400).send({
//           message: "Product content can not be empty"
//       })
//   }
//   Product.findByIdAndUpdate(req.params.productId, {
//     indexImgUrl: req.body.indexImgUrl,
//     name: req.body.name,
//     price: req.body.price,
//     retailPrice: req.body.retailPrice,
//     discount: req.body.discount,
//     className: req.body.className,
//     dataNumber: req.body.dataNumber
//   }, {new: true})
//   .then(product => {
//       if(!product) {
//           return res.status(404).send({
//               message: "Product not found with ID " + req.params.productId
//           })
//       }
//       res.send(product);
//   }).catch(err => {
//       if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//               message: "Product not found with ID " + req.params.productId
//           })           
//       }
//       return res.status(500).send({
//           message: "Error updating product with ID " + req.params.productId
//       })
//   })
// }

// exports.delete = (req, res) => {
//   Product.findByIdAndRemove(req.params.productId)
//   .then(product => {
//       if(!product) {
//           return res.status(404).send({
//               message: "Product not found with id " + req.params.productId
//           })
//       }
//       res.send({message: "Product deleted successfully!"})
//   }).catch(err => {
//       if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//           return res.status(404).send({
//               message: "Product not found with id " + req.params.productId
//           })
//       }
//       return res.status(500).send({
//           message: "Could not delete product with id " + req.params.productId
//       })
//   })
// }
