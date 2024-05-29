import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import About from './components/pages/About'
import ProductPage from './components/pages/ProductPage'
import Inventory from './components/pages/Inventory'

export default function App() {

  return (
    <>
      <nav className='navbar'>
        <Link className='links' to="/about">
          About
        </Link>

        <Link className='links' to="/">
          Home
        </Link>

        <Link className='links' to="cart" >
          <i className="fa-solid fa-cart-shopping">Cart</i>
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>    
        <Route path='/about' element={<About />}/>          
        <Route path='/:productId' element={<ProductPage />}/>        
        <Route path='inventoryEditing' element={<Inventory />}/>
      </Routes>
    </>
  )
}