import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <nav className='navbar'>
        <Link className='links' to="/" >
          Home
        </Link> 

        <Link className='links' to="/about" > 
          About
        </Link>

        <Link className='links' to="/services" > 
          Services
        </Link>       
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />}/>
      </Routes>
    </>
  )
}
