import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import AddCommentForm from './addCommentForm'

export default function Issue(props) {
  const { allComments, user } = useContext(UserContext)
  const {title, description, upvotes, downvotes, theme, _id} = props
    
  const filteredComments = allComments.filter(comment => comment.issue === _id) 
  
  
  return (
    <div className={`issue ${theme}`}>
      <h1 className={`${theme}Border`}>{title}</h1>

      <p>posted by: #{user.username}</p>

      <h3>{description}</h3>

      <div className={`splitContainer ${theme}Border`}>
        <span>{upvotes.length} Upvotes</span>

        <span>{downvotes.length} Downvotes</span>
      </div>

      <AddCommentForm _id={ _id }  />

      <div className='commentsContainer'>
        {filteredComments.map(comment => {
          <div key={comment._id}>
            <p>{comment.text}</p>
          </div>
        })}
      </div>
    </div>
  )
}