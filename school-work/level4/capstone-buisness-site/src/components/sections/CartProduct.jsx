import {useContext} from "react";
import { Context } from "../../context";
// import { Link } from "react-router-dom";

export default function CartProduct(props){
  const {setCartCollection} = useContext(Context)

  function handleClick(id){
    setCartCollection(prev => prev.filter(thing => thing.id !== id));
  }
  
  return(
    <div className='cartProduct'>
      <div className='productImgContainer'>
        <img className='productImg' src={props.imgUrl} />
      </div>

      <h1 className='cartProductTitle'>{props.title}</h1>

      <div className='btnContainer'>
      {/* <Link to={`${props._id}`}><button className='productBtn'>View</button></Link> */}
            
        <button className='cartProductBtn' onClick={() => handleClick(props.id)}>Remove from Cart</button>
      </div>    
    </div>
    )
}