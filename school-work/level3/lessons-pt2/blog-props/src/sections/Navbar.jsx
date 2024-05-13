import { useState } from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <p>Start Bootstrap</p>
            <div className='navLinks'>
                <p>Home</p>
                <p>About</p>
                <p>Sample Post</p>            
                <p>Contact</p>
            </div>
        </nav>
    )
}

export default Navbar