import { useContext } from 'react'
import { ThemeContext } from './themeContext'

function MainBody() {

  const {color, toggleTheme} = useContext(ThemeContext)

  return (

      <div className={`main main-${color}`}>
        <h1 className={`header`}>Check out the different Themes!</h1>
        <button onClick={toggleTheme} className={`toggleBtn toggleBtn-${color}`}>Toggle Theme</button>
      </div>
  )
}

export default MainBody