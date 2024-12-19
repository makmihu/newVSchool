import { useState } from 'react'
import Navbar from './Navbar'
import MainBody from './MainBody'
import Footer from './Footer'
import { ThemeContextProvider } from './themeContext'

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <MainBody />
      <Footer />
    </ThemeContextProvider>
  )
}

export default App