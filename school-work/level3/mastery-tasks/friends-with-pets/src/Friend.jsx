import { useState } from 'react'
import Pet from "./Pet.jsx"

function Friend(props) {
    const pets = props.pets.map(item => {
        console.log(item)
        return(  
          <Pet 
            key={item.name}
            petName={item.name}
            breed={item.breed}
          />
        )
      })
    return(
        <div className='friend'>
            <h1 className='name'>{props.name}</h1>
            <div className='section'>
                <div>
                    <span>Age: </span>
                    <span>{props.age}</span>
                </div>
                <div>
                    <p>Pets: </p>
                    {pets}
                </div>
            </div>
        </div>
    )
}
export default Friend