const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const movies = [
    { title: 'die hard', genre: 'action' , _id: uuidv4() },
    { title: 'star wars IV', genre: 'fantasy' , _id: uuidv4() },
    { title: 'lion king', genre: 'fantasy' , _id: uuidv4() },
    { title: 'friday the 13th', genre: 'horror' , _id: uuidv4() }
]

//get all
movieRouter.get("/", (req, res) => {
    res.status(200).send(movies)
})

//get one
movieRouter.get('/:movieId', (req, res , next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with id ${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})

//get by genre
movieRouter.get('/search/genre', (req, res) => {
    //   /movie/search/genre?genre=${name of genre}  
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

//post one
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.status(201).send(newMovie)
})

//delete one
movieRouter.delete('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(201).send(updatedMovie)
})
module.exports = movieRouter