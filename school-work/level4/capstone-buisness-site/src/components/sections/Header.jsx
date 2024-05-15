import React from 'react'


export default function Header(props) {

  return (
      <div className='header'>
        <div className={`logo ${props.class}`}></div> 
        <div className='textBox'>
          <h1 className='mainHeaderText'>{props.header}</h1>
          <p className='subHeaderText'>{props.subHeader}</p>
        </div>
      </div>
  )
}