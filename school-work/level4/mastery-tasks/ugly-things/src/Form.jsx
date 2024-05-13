import {useContext } from 'react'
import { UglyContext } from './uglyContext'

function Form() {
  const {handleChange, handleSubmit, uglyThing} = useContext(UglyContext)

  return (
    <form className='form'>
      <input 
        type='text'
        placeholder='Image Url'
        name='imgUrl'
        className='formInput'
        value={uglyThing.imgUrl}
        onChange={handleChange}
        required
      />
      <input 
        type="text"
        placeholder='Ugly Thing Name'
        name='title'
        className='formInput'
        value={uglyThing.title}
        onChange={handleChange}
        required
      />
      <textarea 
        name='description'
        placeholder='Description'
        className='formDescription' 
        value={uglyThing.description}
        onChange={handleChange}  
        required
      />
      <button
        className='submitBtn'
        onClick={handleSubmit}   
      >
        Submit Thing
      </button>
    </form>
  )
}

export default Form