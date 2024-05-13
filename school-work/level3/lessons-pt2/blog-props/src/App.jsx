import { useState } from 'react'
import Header from "./sections/Header.jsx"
import BlogList from "./sections/BlogList.jsx"
import Footer from "./sections/Footer.jsx"

function App() {

  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <BlogList />
        {/* <BlogPost /> */}
      <Footer />
    </div>
  )
}

export default App


