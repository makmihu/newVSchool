import { useContext } from 'react'
import { BountyContext } from './bountyContext'
import NewBountyForm from './components/NewBountyForm'
import Bounty from './components/Bounty'


export default function App() {
  const {bounties} = useContext(BountyContext)
  
  const mappedBounties = bounties.map(info => (
    <Bounty 
      {...info}
      key={info._id}
    /> 
  ))

  return (
    <div>
      <NewBountyForm />
      <div className='bountiesContainer'>
        {mappedBounties}
      </div>
    </div>
  )
}