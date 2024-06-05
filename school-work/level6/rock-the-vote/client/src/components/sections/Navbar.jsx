import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to='/profile' className='navLink'>Profile</Link>
      <Link to='/issues' className='navLink'>Issues</Link>
    </nav>
  )
}