import { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import AddMovieForm from './components/AddMovieForm'

export default function App() {
const [movies, setMovies] = useState([])

function getMovies(){
  axios.get('/api/movies')
  .then(res => setMovies(res.data))
  .catch(err => console(err))
}

function addMovie(newMovie){
  axios.post('/api/movies', newMovie)
    .then(res => {
      setMovies(prev => [...prev, res.data])
    })
    .catch(err => console.log(err))
}

function deleteMovie(movieId){
  axios.delete(`/api/movies/${movieId}`)
    .then(res => {
      setMovies(prev => prev.filter(movie => movie._id !== movieId))
    })
    .catch(err => console.log(err))
}

function editMovie(updates, movieId){
  axios.put(`/api/movies/${movieId}`, updates)
    .then(res => {
      setMovies(prev => prev.map(movie => movie._id !== movieId ? movie : res.data))
    })
    .catch(err => console.log(err))
}

useEffect(() => {
  getMovies()
}, [])

const moviesMapped = movies.map(movie => (
  <Movie 
    key={movie._id} 
    {...movie} 
    deleteMovie={deleteMovie}
    editMovie={editMovie}
  /> 
))
  return (
    <div className='movieContainer'>
      <AddMovieForm submit={addMovie}  btnText="Add Movie"/>
      { moviesMapped } 
    </div>
  )
}
