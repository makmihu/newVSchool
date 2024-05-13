import { useState } from 'react'

function Pet(props) {
    return(
        <div className='pet'>
            <p className='petName'>{props.petName}</p>
            <p className='breed'>{props.breed}</p>
        </div>
    )
}
export default Pet