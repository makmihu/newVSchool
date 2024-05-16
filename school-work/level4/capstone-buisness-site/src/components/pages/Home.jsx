import { useContext } from 'react'
import { Context } from '../../context'
import Header from '../sections/Header'
import Product from '../sections/Product'

export default function Home() {
  const {productCollection} = useContext(Context)

  const productsMapped = productCollection.map((info) => (
    <Product 
      key={info._id}
      {...info}
    />
  ))

  return (
      <div>
        <Header
          class={"bigLogo"} 
          header={"Mikkie Makes"}
          subHeader={"Crochet, Amigurumi, & More!"}
        />

        <div className='productSection'>
          {productsMapped}
        </div>
      </div>
  )
}