const express = require("express")
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const tvShows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { title: "Watchmen", _id: uuidv4() },
    { title: "Westworld", _id: uuidv4() },
    { title: "Friends", _id: uuidv4() }
]

tvshowRouter.route("/")
  .get((req, res) => {
    res.send(tvShows)
  })
  .post((req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`successfully added ${newShow.title} to the database!`)
  })
  
//get and delete one
tvshowRouter.route("/:tvshowId")
  .get( (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
  })
  .delete( (req, res) => {
    const tvShowID = req.params.tvshowId
    const showIndex = tvShows.findIndex(show => show._id === tvShowID)
    tvShows.splice(showIndex, 1)
    res.send("Successfully deleted tv show!")
  })
  .put( (req, res) => {
    const tvShowId = req.params.tvshowId
    const tvShowIndex = tvShows.findIndex(tvShow => tvShow._id === tvShowId)
    const updatedTvShow = Object.assign(tvShows[tvShowIndex], req.body)
    res.send(updatedTvShow)
})


module.exports = tvshowRouter