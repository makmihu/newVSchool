import { useState } from 'react'
import Friend from "./Friend.jsx"
import data from "./data.jsx"

function FriendList() {
    const friends = data.map(item => {
        return(  
          <Friend 
            key={item.name}
            name={item.name}
            age={item.age}
            pets={item.pets}
          />
        )
      })
    return(
        <div className='friendsList'>
            {friends}
        </div>
    )
}
export default FriendList