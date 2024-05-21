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

bountiesRouter.route("/:bountyId")
  .get( (req, res) => {
    const bountyId = req.params.bountyId
    res.send(bounties.find(bounty => bounty._id === bountyId))
  })
  .delete( (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
  })
  .put( (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    const updatedbounties = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedbounties)
})

module.exports = bountiesRouter