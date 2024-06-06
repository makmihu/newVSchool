import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function NewIssueForm() {
  const {addIssue} = useContext(UserContext) 
  const initInputs = { title: "", description: "" }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  return (
    <div className='newIssueContainer'>
      <h1>Add Issue</h1>
      
      <form  onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={inputs.title} 
          onChange={handleChange} 
          placeholder="Title"/>
        <textarea 
          name="description" 
          value={inputs.description} 
          onChange={handleChange} 
          placeholder="Description"/>
        <button>Add Issue</button>
      </form>
    </div>
  )
}