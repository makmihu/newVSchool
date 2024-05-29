import React from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

export default function CartCard(props){
  const {setCartCollection} = useContext(Context)

  function handleClick(id){
    setCartCollection(prev => prev.filter(thing => thing.id !== id));
  }

  return (
    <div className='cartCard'>
      <div className='cardImgContainer'>
        <img className='cardImg' src={props.imgUrl} />
      </div>

      <h1 className='cartCardTitle'>{props.title}</h1>

      <div className='btnContainer'>
      <Link to={`/${props._id}`}><button className='cardBtn'>View</button></Link>
            
        <button className='cartCardBtn' onClick={() => handleClick(props.id)}>Remove from Cart</button>
      </div>
    </div>
  )
}