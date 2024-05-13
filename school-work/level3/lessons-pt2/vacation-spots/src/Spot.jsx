import { useState } from 'react'

function Spot(props) {
  return (
    <div className='spot'>
        <p className='place'>{props.place}</p>
        <div className='section'>
            <div>
                <span>Price: </span>
                <span className='price'>${props.price}</span>
            </div>
            <div>
                <span>When To Go: </span>
                <span className='timeToGo'>{props.timeToGo}</span>
            </div>
        </div>
    </div>
  )
}

export default Spot