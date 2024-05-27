import { useState, UseContext} from 'react'
import { Context } from '../context'
import { useContext } from 'react'

export default function NewBountyForm() {
  const {addBounty} = useContext(Context)
  const initInputs = {
    firstName: "",
    lastName: "",
    bountyAmount: "",
    type: "",
    living: false
  }  
  const [inputs, setInputs] = useState(initInputs)
  
  function handleChange(e){
    const {name, value, type, checked} = e.target 
    setInputs(prev => ({...prev, [name]: type === "checkbox" ? checked : value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    addBounty(inputs)
    setInputs(initInputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
        <input 
          type="text" 
          name="firstName" 
          value={inputs.firstName} 
          onChange={handleChange} 
          placeholder="First Name"
        />

        <input 
          type="text" 
          name="lastName" 
          value={inputs.lastName} 
          onChange={handleChange} 
          placeholder="Last Name"
        />
              
        <input 
          type="number" 
          name="bountyAmount" 
          value={inputs.bountyAmount} 
          onChange={handleChange} 
          placeholder="Bounty Amount"
        />

        <input 
          type="text" 
          name="type" 
          value={inputs.type} 
          onChange={handleChange} 
          placeholder="type (sith or jedi)"
        />
      </div>

      <div className='formBottom'>
        <div className='checkboxContainer'>
          <label  htmlFor='living' className='checkboxText'>Check If They Are Alive</label>
          
          <input 
            type="checkbox" 
            id='living'
            name="living" 
            checked={inputs.living} 
            onChange={handleChange} 
          />
        </div>
          
        <button>Save New Bounty</button>
      </div>
    </form>
  )
}