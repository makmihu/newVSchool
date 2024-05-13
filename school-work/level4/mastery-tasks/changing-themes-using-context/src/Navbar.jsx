import { useContext } from 'react'
import { ThemeContext } from './themeContext'

function Navbar() {
  
  const{color} = useContext(ThemeContext)

  return (
      <div className={`nav nav-${color}`}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Shop</p>
        <p>Menu</p>
      </div>
  )
}

export default Navbar