import { useState } from 'react'

function ColorSelector(props) {

  return (
      <div className='colorSelector '>
        <label for="color" className='right'>Color {props.number}</label>
        <span className='right'>{props.color}</span>
        <input type="color" name={props.name} value={props.color} className='colorBox' onChange={props.handleChange} />
      </div>
  )
}

export default ColorSelector