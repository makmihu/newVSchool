import { createContext, useState } from "react";
import axios from "axios"
import { useEffect } from "react";

export const Context = createContext()

function ContextProvider(props){
  const [bounties, setBounties] = useState([])

  function getBounties(){
    axios.get('/api/bounties')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
  }

  function addBounty(newBounty){
    axios.post('/api/bounties', newBounty)
      .then(res => {
        setBounties(prev => [...prev, res.data])
      })
      .catch(err => console.log(err))
  }  

  function deleteBounty(bountyId){
    axios.delete(`/api/bounties/${bountyId}`)
      .then(res => {
        setBounties(prev => prev.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }
  
  function editBounty(updates, bountyId){
    axios.put(`/api/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prev => prev.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <Context.Provider value={{
        bounties,
        addBounty,
        deleteBounty,
        editBounty
    }}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider