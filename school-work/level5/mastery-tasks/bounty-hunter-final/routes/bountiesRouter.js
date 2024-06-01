const express = require('express')
const bountiesRouter = express.Router()
const Bounty = require('../models/bounty')

bountiesRouter.route('/')
//Get All
  .get(async (req, res, next) => {
    Bounty.find((err, bounties) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(bounties)
    })
    // try {
    //   const bounties = await Bounty.find()
    //   return res.status(200).send(bounties)
    // } catch (err) {
    //   res.status(500)
    //   return next(err)
    // }
  })
//Save New
  .post((req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(savedBounty)
    })
  })

bountiesRouter.route('/:bountyId')
//Delete One
  .delete((req, res, next) => {
    Bounty.findOneAndDelete(
      {_id: req.params.bountyId}, 
      (err, deleteItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deleteItem.firstName} was removed from your Bounties`)
      }
    )
  })
//Update One
  .put((req, res, next) => {
    Bounty.findOneAndUpdate(
      {_id: req.params.bountyId}, //find this one to update
      req.body, //update the object with this data
      {new: true}, //send back updated version
      (err, updatedBounty) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(updatedBounty)
      }
    )
  })

module.exports = bountiesRouter