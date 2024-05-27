import { useState } from 'react'
import AddMovieForm from './AddMovieForm'

export default function Movie(props) {
  const {title, genre, _id} = props
  const [toggle, setToggle] = useState()

  return (
    <div className='movie'>
      { !toggle ? 
      <>
        <h1>{title}</h1>

        <p>{genre}</p>

        <button 
          className='deleteBtn'
          onClick={() => props.deleteMovie(_id)}
        >
          Delete
        </button>

        <button
          className='editBtn'
          onClick={() => setToggle(prev => !prev)}
        >
          Edit
        </button>
      </>
      :
      <>
        <AddMovieForm 
          title={title}
          genre={genre}
          _id={_id}
          btnText="Submit Edit"
          submit={props.editMovie}
        />

        <button 
          onClick={() => setToggle(prev => !prev)}
        >
          Close
        </button>
      </>
      }
    </div>
  )
}