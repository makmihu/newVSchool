import { useState } from 'react'
import Navbar from "./Navbar.jsx"

function Header() {

  return (
    <div className='header'>
        <Navbar />
        <div className='titleBlock'>
          <h1>Clean Blog</h1>
          <h3>A Blog Theme by Start Bootstrap</h3>
        </div>
    </div>
  )
}

export default Header