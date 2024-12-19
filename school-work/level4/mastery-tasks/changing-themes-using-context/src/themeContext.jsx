import React from 'react'

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [color, setColor] = React.useState("light")
    function toggleTheme(){
      setColor(prev => prev === "light" ? "dark" : "light")
    }
  return (
    <ThemeContext.Provider value={{
      color,
      toggleTheme,
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}