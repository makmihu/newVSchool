import { useState, useContext } from 'react'
import { Context } from '../context'

export default function Bounty(props) {
  const {deleteBounty, editBounty} = useContext(Context)
  const [toggle, setToggle] = useState()
  const initInputs = {
    firstName: props.firstName,
    lastName: props.lastName,
    bountyAmount: props.bountyAmount,
    living: props.living,
    type: props.type
  }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target 
    setInputs(prev => ({...prev, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    editBounty(inputs, props._id)
    setInputs(initInputs)
    setToggle(prev => !prev)
  }

  return (
    <div className={`bountyCard ${props.type === 'jedi' ? 'jedi' : 'sith'}`}>
      { !toggle ?
      <>
        <div className='bountyCardTop'>
          <p>{props.firstName} {props.lastName}</p>
          <p>{props.bountyAmount} Credits</p>
          <div className='bountyImgContainer'>
            <img 
              className='livingImg'
              src={
                !props.living ? 
                'https://i.ebayimg.com/images/g/32kAAOSw-29ZSj2W/s-l400.jpg' 
                : 
                'https://t4.ftcdn.net/jpg/02/51/62/37/360_F_251623750_3HQ3Et1LOvNGbhXHSWd8QNc0cYVE2rlv.jpg'
              }
            />
          </div>
        </div>

        <div className='bountyCardBottom'>
        <button
                onClick={() => deleteBounty(props._id)}
              >
                Delete Bounty
              </button>
              <button
                onClick={() => setToggle(prev => !prev)}
              >
                Edit Bounty
              </button>    
        </div>
      </>
      : 
      <>
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
                
              <button>Save Changes</button>
            </div>
        </form>
        
        <div className='bountyCardBottom'>
          <button
              onClick={() => setToggle(prev => !prev)}
            >
              Close
          </button>
        </div>      
      </>
      }
    </div>
  )
}