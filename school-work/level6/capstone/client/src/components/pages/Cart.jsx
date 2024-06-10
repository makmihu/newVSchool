import { useContext } from 'react'
import { Context } from '../../context'
import CartCard from '../sections/CartCard'
import Header from '../sections/Header'

export default function Cart(){
  const {cartCollection} = useContext(Context)


  const cartMapped = cartCollection.map((info) => (
    <CartCard 
      {...info}
      key={info._id}
    />
  )) 

  return (
    <>
      <Header
        class={"small"} 
        header={"Cart"}
      />
      <main>
        {cartCollection.length > 0 ?
          <div className='cardsContainer'>
            {cartMapped}
          </div>
        :
          <div className='emptyCart'>
            <h1 className='emptyCartItem'>There Are No Items In Your Cart</h1>
            <h1 className='emptyCartItem'>Return To The Home Page to browse Items</h1>
          </div> 
        }
      </main>
    </>
  )
}