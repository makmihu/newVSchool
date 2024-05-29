import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const Context = createContext()
  
function ContextProvider(props){ 
  const [inventoryCollection, setInventoryCollection] = useState([])
  const [cartCollection, setCartCollection] = useState([])

  function getInventory(){
    axios.get('/api/inventory')
      .then(res => setInventoryCollection(res.data))
      .catch(err => console.log(console.log(err)))
  }

  function addProduct(newProduct){
    axios.post('/api/inventory', newProduct)
      .then(res => {
        setInventoryCollection(prev => [...prev, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteProduct(productId){
    axios.delete(`/api/inventory/${productId}`)
      .then(res => {
        setInventoryCollection(prev => prev.filter(product => product._id !== productId))
      })
      .catch(err => console.log(err))
  }

  function editProduct(updates, productId){
    axios.put(`/api/inventory/${productId}`, updates)
      .then(res => {
        setInventoryCollection(prev => prev.map(product => product._id !== productId ? product : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getInventory() 
  }, []) 

  return(
    <Context.Provider value={{
        inventoryCollection,
        cartCollection,
        setCartCollection,
        addProduct,
        deleteProduct,
        editProduct
    }}>
      {props.children}
    </Context.Provider>
  )
}
  
export default ContextProvider  