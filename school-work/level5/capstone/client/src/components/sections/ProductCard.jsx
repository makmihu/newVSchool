import { useContext } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

export default function ProductCard(props){
  const {setCartCollection} = useContext(Context)

  function handleClick(){
    setCartCollection(prev => ([
      ...prev,
      {
        _id: props._id,
        title: props.title,
        // imgUrl: props.imgUrl,
        description: props.description
      }
    ]))
  }

  return (
    <div className='card'>
      <h1 className='cardTitle'>{props.name}</h1>

      <div className='cardImgContainer'>
        {/* <img className='cardImg' src={props.imgUrl} /> */}
      </div>

      <p className='cardDescription'>{props.description}</p>

      <div className='btnContainer'>
        <Link to={`${props._id}`}><button className='cardBtn'>View</button></Link>
    
        <button className='cardBtn' onClick={handleClick}>Add to Cart</button>
      </div> 
    </div>
  )
}