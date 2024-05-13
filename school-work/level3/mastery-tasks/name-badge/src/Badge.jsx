import { useState } from "react"

function Badge(props) {

  return(
    <div className="badge">
      <h1 className="badgeHeader">Badge:</h1>
      <div className="grid">
        <p className="left">Name: {props.firstName} {props.lastName}</p>
        <p className="right">Place of Birth: {props.birthplace}</p>
        <p className="left">Email: {props.email}</p>
        <p className="right">Phone: {props.phone}</p>
        <p className="left">Favorite Food: {props.favFood}</p>
        <div className="commentBox">{props.comments}</div>
      </div>
    </div>
  )
}
export default Badge