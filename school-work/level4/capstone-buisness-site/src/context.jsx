import { createContext, useState, useEffect } from "react"
import axios from "axios"
  
export const Context = createContext()
  
function ContextProvider(props){ 
  const [productCollection, setProductCollection] = useState([])
  const [cartCollection, setCartCollection] = useState([])

  useEffect(() => {
    axios.get("https://api.vschool.io/makaylamihu/thing")
      .then(response => setProductCollection(response.data))
      .catch(err => console.log(console.log(err)))
  }, [])  

  return(
    <Context.Provider value={{
        productCollection,
        cartCollection,
        setCartCollection
    }}>
      {props.children}
    </Context.Provider>
  )
}
  
export default ContextProvider  