import React from 'react'

export default function ProjectCard(props) {
  const {side, src, name, desc} = props

  return (
    <div className={`card ${side}`}>
      <div className='imgContainer'>
        <img src={src}/>
      </div>

      <h1>{name}</h1>

      <p>{desc}</p>

      <div className='btnsContainer'>
        <button className='cardBtn'>View Live</button>

        <button className='cardBtn'>View Code</button>
      </div>
    </div>
  )
}