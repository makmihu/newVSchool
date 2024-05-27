import { useState, useContext, useEffect } from 'react'
import { BountyContext } from '../bountyContext'

export default function Bounty(props) {
  const {deleteBounty, editBounty} = useContext(BountyContext)
  const [toggle, setToggle] = useState()
  const [color, setColor] = useState('white')
  const initInputs = {
    firstName: props.firstName,
    lastName: props.lastName,
    bountyAmount: props.bountyAmount,
    living: props.living,
    type: props.type
  }
  const [inputs, setInputs] = useState(initInputs)

  useEffect(() => {
    if(props.type === "sith"){setColor('red')}  
    if(props.type === "jedi"){setColor('green')}
  }, [setColor])

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
    <div className={`bounty ${color}`}>
      { !toggle ? 
        <>
          <div className='bountyTop'>
            <h1 className='bountyItem'>{props.firstName} {props.lastName}</h1>
            <h1 className='bountyItem'>{props.bountyAmount} Credits</h1>
            <div className='bountyBox'>
              <img 
                className='livingImg'
                src={
                  props.living ? 
                  'https://i.ebayimg.com/images/g/32kAAOSw-29ZSj2W/s-l400.jpg' 
                  : 
                  'https://t4.ftcdn.net/jpg/02/51/62/37/360_F_251623750_3HQ3Et1LOvNGbhXHSWd8QNc0cYVE2rlv.jpg'
                }
              />
            </div>
          </div>

          <div className='bountyBottom'>
              <button
                onClick={() => deleteBounty(_id)}
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
                
                {/* <input 
                  type="checkbox" 
                  id='living'
                  name="living" 
                  checked={inputs.living} 
                  onChange={handleChange} 
                /> */}
              </div>
                
              <button>Save Changes</button>
            </div>
          </form>

          <button
            onClick={() => setToggle(prev => !prev)}
          >
            Close
          </button>
        </>
      }
    </div>
  )
}