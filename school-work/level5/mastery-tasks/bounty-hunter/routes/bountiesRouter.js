const express = require("express")
const bountiesRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
 {
    firstName: "",
    lastName: "",
    living: true,
    bountyAmount: 0,
    type: "", // ('sith' or 'jedi')
    _id: uuidv4()
  }
]

bountiesRouter.route('/')
  .get((req, res) => {
    res.send(bounties)
  })
  .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully Added ${newBounty.firstName} ${newBounty.lastName} to Your Bounties List`)
  })


module.exports = bountiesRouter