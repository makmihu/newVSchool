import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';

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

          <Link className='links' to="store">
          Store
          </Link>
        
        </nav>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='store' element={<Store />}/>
        </Routes>
      </>
  )
}