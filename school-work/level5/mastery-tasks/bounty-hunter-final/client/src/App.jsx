import { useContext } from 'react'
import { Context } from './context' 
import NewBountyForm from './components/NewBountyForm'
import Bounty from './components/Bounty'

export default function App() {
  const {bounties} = useContext(Context)

  const mappedBounties = bounties.map(info => (
    <Bounty
      {...info} 
      key={info._id}
    />
  ))
  return (
    <>
      <NewBountyForm />
      
      <div className='bountiesContainer'>
        {mappedBounties}
      </div>
    </>
  )
}