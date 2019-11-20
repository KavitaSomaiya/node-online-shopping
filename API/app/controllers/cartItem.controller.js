
const CartItem = require('../models/cartItem.models')

// Create and Save a new Product
exports.create = (req, res) => {

  const cartItem = new CartItem({
    cartProducts = req.body.cartProducts,
    productId: req.body.productId,
    quantity: req.body.quantity,
    offersApplied: req.body.offersApplied,
    deliveryDate: req.body.deliveryDate,
    userId: req.body.userId
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
  if (CartItem.length > 0) {
    CartItem.find()
    .populate(
    {
      path: 'cartproducts',
      match:{name:"productId"}
    }
    ).exec(function (err, result) {
      if (err) return handleError(err)
      res.send(result)
    })
  } else {
    alert('No Records Found.')
  }  
}

//   CartItems.aggregate(pipeline, function (err, result){     
//     if (err) throw err
//     var categories = result.map(function(doc) { return new Product(doc) });
//     Expense.populate(categories, { "path": "productId" }, function(err, results) {
//         if (err) throw err
//         console.log(JSON.stringify(results, undefined, 4 ))
//         res.json(results);
//     })
// })


// CartItem.aggregate([
//   { $match: { productId: req.body.productId } },
//   { $lookup: { from: "products", localField: "cartItems", foreignField: "productId", as: "cartItems"  } },
//   { $unwind: "$cartItems" },
//   { $replaceRoot: { newRoot: "$cartItems" } }
// ], function(err, result){
//   if (err) return handleError(err)
//   res.send(result)
//   console.log(result)
// })

  // CartItem.find()
  //   .populate(
  //   {
  //       path: 'cartproducts',
  //       match:{name:"productId"}
  //   }
  //   ).exec(function (err, result) {
  //       if (err) return handleError(err)
  //       res.send(result)
  //       console.log(result)
  // })

        // result.forEach(function(eachItem) {
        //   console.log(eachItem)
        // })
    

//   Product.find(req.body).distinct("productId", function(err, docs) {
//     CartItem.find({cartProducts: {$in: docs}})
//     .populate('cartProducts').exec(function (err, result) {
//         if (err) return res.send(err)
//         reslt=[]
//         for(var i in result)
//             if(result[i].productId)reslt.push(result[i])
//         res.send(reslt)
//     })
// })


  // CartItem.find({'cartProducts.type':'productId'})
  // .exec(function(err, cartItems) {
  //   res.json(cartItems)
  // })


  // CartItem.find()
  // .populate({
  //   path: 'cartProducts',
  //   match: {
  //     type: 'productId'
  //   }
  // }).exec(function(err, cartItems) {
  //   cartItems = cartItems.filter(function(cartItem) {
  //     return cartItem.productId // return only users with email matching 'type: "Gmail"' query
  //   })
  // }) 
  // .then(cartItems => {
  //   res.send(cartItems)
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message: err.message || 'Some error occured while retrieving cart items.'
  //   })
  // })

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
    cartProducts: req.body.productId,
    productId: req.body.productId,
    quantity: req.body.quantity,
    offersApplied: req.body.offersApplied,
    deliveryDate: req.body.deliveryDate,
    userId: req.body.userId
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





// exports.update = (req, res) => {
//   console.log(req.body)
//   if(!req.body) {
//       return res.status(400).send({
//           message: "Cart item content can not be empty"
//       })
//   }
//   CartItem.findByIdAndUpdate(req.params.cartItemId, {
//     // indexImgUrl: req.body.indexImgUrl,
//     // name: req.body.name,
//     productId: req.body.productId,
//     quantity: req.body.quantity,
//     sellerName: req.body.sellerName,
//     // price: req.body.price,
//     // retailPrice: req.body.retailPrice,
//     offersApplied: req.body.offersApplied,
//     // dataNumber: req.body.dataNumber,
//     deliveryDate: req.body.deliveryDate,
//     userId: req.body.userId
//   }, {new: true})
//   .then(cartItem => {
//       if(!cartItem) {
//           return res.status(404).send({
//               message: "Cart item not found with ID " + req.params.cartItemId
//           })
//       }
//       res.send(cartItem)
//   }).catch(err => {
//       if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//               message: "Cart Item not found with ID " + req.params.cartItemId
//           })           
//       }
//       return res.status(500).send({
//           message: "Error updating cart item with ID " + req.params.cartItemId
//       })
//   })
// }
