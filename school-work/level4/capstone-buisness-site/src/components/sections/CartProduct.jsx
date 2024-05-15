import {useContext} from "react";
import { Context } from "../../context";

export default function CartProduct(props){
  const [setCartCollection] = useContext(Context)

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
        <button className='productBtn'>View</button>
            
        <button className='productBtn' onClick={() => handleClick(props.id)}>Remove</button>
      </div>    
    </div>
    )
}