import { useContext } from 'react'
import { ThemeContext } from './themeContext'

function Footer() {

  const {color} = useContext(ThemeContext)

  return (
    <div className={`footer footer-${color}`}>
		<p>Twitter</p>
		<p>Facebook</p>
		<p>Snapchat</p>
		<p>Instagram</p>
    </div>
  )
}

export default Footer