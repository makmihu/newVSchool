import { useState } from 'react'
import Spot from "./Spot.jsx"
import data from "./data.jsx"

function App() {
  const spots = data.map(item => {
    return(  
      <Spot 
        key={item.id}
        place={item.place}
        price={item.price}
        timeToGo={item.timeToGo}
      />
    )
  })
  
  return (
    <div className='page'>
      <h1 className='header'>Vacation Spots</h1>
      <div className='spotsList'>
        {spots}
      </div>
    </div>
    )
  
}

export default App
