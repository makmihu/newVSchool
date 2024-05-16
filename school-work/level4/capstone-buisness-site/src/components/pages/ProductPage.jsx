import React, {useContext} from 'react'
import { Context } from '../../context'
import { useParams } from 'react-router-dom'
import Header from '../sections/Header'
import Aside from '../sections/Aside'

export default function ProductPage() {

  const {productCollection, setCartCollection} = useContext(Context)
  const {productID} = useParams()
  const chosenProduct = productCollection.find( product => product._id === productID )

  function handleClick(){
    setCartCollection(prev => ([
      ...prev, 
      {
        _Id: productID,
        title: chosenProduct.title,
        imgUrl: chosenProduct.imgUrl,
        description: chosenProduct.description
      }
    ]))
  }
  return (
      <div>
        <Header 
          class={"smallLogo"} 
          header={chosenProduct.title}
        />
        <main>
          <div className='mainWithAside'>
            <div className='productDescContainer'>
              <p className='descTight'>{chosenProduct.description}</p>
              <p className='desc'>****************************</p>
              <p className='descTight'>Price: tbd</p>
              <p className='descTight'>Approximate Size: tbd</p>
              <p className='descTight'>Materials: tbd</p>
            </div>
            <button className='productBtnLarge' onClick={handleClick}>Add to Cart</button>
          </div>
            
          <Aside 
            color={"Green"}
            img={chosenProduct.imgUrl}
          />
        </main>
      </div>
  )
}