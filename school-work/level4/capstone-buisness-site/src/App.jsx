import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import ProductPage from './components/pages/ProductPage';

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
          <Route path='about' element={<About />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='/:productID' element={<ProductPage />}/>
        </Routes>
      </>
  )
}