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
    res.send(movies)
})

//get one
movieRouter.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//get by genre
movieRouter.get('/search/genre', (req, res) => {
    //   /movie/search/genre?genre=${name of genre}  
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

//post one
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`successfully added ${newMovie.title} to the database!`)
})



module.exports = movieRouter