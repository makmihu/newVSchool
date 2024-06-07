import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function AddCommentForm(props) {
  const { addComment } = useContext(UserContext)
  const [commentNew, setCommentNew] = useState('') 
  
  function handleChange(e){
    setCommentNew(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    addComment(commentNew, props._id)
    setComentNew('')
  }

  return(
    <form onSubmit={handleSubmit} className='commentForm'>
      <textarea 
        className='commentTxtArea'
        name='commentNew'
        value={commentNew}
        onChange={handleChange}
        placeholder='Add a New Comment'
      />
      <button className='commentBtn'>Add Comment</button>
    </form>
  )
}