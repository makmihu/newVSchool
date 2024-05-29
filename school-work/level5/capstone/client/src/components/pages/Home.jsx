import { useContext } from 'react'
import { Context } from '../../context'
import Header from '../sections/Header'
import ProductCard from '../sections/ProductCard'

export default function Home(){
  const { inventoryCollection } = useContext(Context)

  const productsMapped = inventoryCollection.map(info => (
    <ProductCard 
      key={info._id}
      {...info}
    />
  ))

  return (
    <>
      <Header 
        class={'bigLogo'}
        header={'Mikkie Makes'}
        subHeader={"Crochet, Amigurumi, & More!"}
      />
      
      <div className='cardSection'>
        {productsMapped}
      </div>
    </>
  )
}