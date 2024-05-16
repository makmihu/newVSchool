import { useContext } from 'react'
import { Context } from '../../context'
import Header from '../sections/Header'
import CartProduct from '../sections/CartProduct'

export default function Cart() {
  const {cartCollection} = useContext(Context)

  const productsMapped = cartCollection.map((info) => (
    <CartProduct 
      key={info.id}
      {...info}
    />
  ))

  return (
      <>
        <Header
          class={"smallLogo"} 
          header={"Cart"}
        />

        {cartCollection.length > 0 ?
          <div className='productSection'>
            {productsMapped}
          </div>
        :
          <div className='emptyCart'>
            <h1 className='emptyCartItem'>There Are No Items In Your Cart</h1>
            <h1 className='emptyCartItem'>Return To The Home Page to browse Items</h1>
          </div> 
        }
      </>
  )
}