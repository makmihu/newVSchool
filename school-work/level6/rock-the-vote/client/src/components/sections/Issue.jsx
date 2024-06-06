import React from 'react'

export default function Issue(props) {
  const {title, description, upvotes, downvotes, user: {username}, _id} = props
  return (
    <div className='issue'>
      <h1>{title}</h1>
      <p>{username}</p>
      <h3>{description}</h3>
      <div className='splitContainer'>
        <span>{upvotes.length} Upvotes</span>
        <span>{downvotes.length} Downvotes</span>
      </div>
      <div>Comments</div>
    </div>
  )
}