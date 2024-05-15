import { useContext } from 'react'
import { Context } from '../../context'
import { Routes, Route, Link } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'

export default function Product(props) {
  const {setCartCollection} = useContext(Context)

  function handleClick(){
    setCartCollection(prev => ([
        ...prev,
        {
            id: props._id,
            title: props.title,
            imgUrl: props.imgUrl
        }
    ]))
  }
  return (
    <>
      <div className='product'>
        <h1 className='productTitle'>{props.title}</h1>

        <div className='productImgContainer'>
            <img className='productImg' src={props.imgUrl} />
        </div>

        <p className='productDescription'>{props.description}</p>

        <div className='btnContainer'>
            <Link to={props._id}><button className='productBtn'>View</button></Link>
            
            <button className='productBtn' onClick={handleClick}>Add to Cart</button>
        </div>    
      </div>

      <Routes>
        <Route path={props._id} element={<ProductPage props />}/>
      </Routes>
    </>
  )
}