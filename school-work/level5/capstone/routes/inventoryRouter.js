const express = require('express')
const inventoryRouter = express.Router()
const Product = require('../models/product')


inventoryRouter.route('/')
//Get All
  .get((req, res, next) => {
    Product.find((err, product) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(product)
    })
  })
//Save New
  .post((req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, savedProduct) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(savedProduct)
    })
  })

inventoryRouter.route('/:productId')
//Get One
  .get((req, res, next) => {
    Product.findOne({_id: req.params.productId}, (err, getItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getItem)
    })
  })
//Delete One
  .delete((req, res, next) => {
    Product.findOneAndDelete(
      {_id: req.params.productId}, 
      (err, deleteItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deleteItem.name} was removed from your Inventory`)
      }
    )
  })
//Update One
  .put((req, res, next) => {
    Product.findOneAndUpdate(
      {_id: req.params.productId}, //find this one to update
      req.body, //update the object with this data
      {new: true}, //send back updated version
      (err, updatedProduct) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(updatedProduct)
      }
    )
  })

module.exports = inventoryRouter