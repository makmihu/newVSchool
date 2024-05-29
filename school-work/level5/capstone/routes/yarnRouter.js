const express = require('express')
const yarnRouter = express.Router()
const Yarn = require('../models/yarn')


yarnRouter.route('/')
//Get All
  .get((req, res, next) => {
    Yarn.find((err, yarn) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(yarn)
    })
  })
//Save New
  .post((req, res, next) => {
    const newYarn = new Yarn(req.body)
    newYarn.save((err, savedYarn) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(savedYarn)
    })
  })

yarnRouter.route('/:yarnId')
//Get One
  .get((req, res, next) => {
    Yarn.findOne({_id: req.params.yarnId}, (err, getItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getItem)
    })
  })
//Delete One
  .delete((req, res, next) => {
    Yarn.findOneAndDelete(
      {_id: req.params.yarnId}, 
      (err, deleteItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deleteItem.color} was removed from your yarn`)
      }
    )
  })
//Update One
  .put((req, res, next) => {
    Yarn.findOneAndUpdate(
      {_id: req.params.yarnId}, //find this one to update
      req.body, //update the object with this data
      {new: true}, //send back updated version
      (err, updatedYarn) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(updatedYarn)
      }
    )
  })

module.exports = yarnRouter