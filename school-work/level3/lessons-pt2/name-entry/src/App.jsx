import { useState } from 'react'

function App() {
  const [inputName, setInputName] = useState("")

  const [namesList, setNamesList] = useState([])

  console.log(namesList)
  function handleChange(event){
    setInputName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    setNamesList(prev => [...prev, inputName])
    setInputName("")
  }

  const listItems = namesList.map(name => {
    return (
      <li>{name}</li>
    )
  })
  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Name'
          onChange={handleChange}
          value={inputName} 
        />

        <button>Add to List</button>
      </form>
      <div className='aside'>
        <h1>{inputName}</h1>
        <div className='list'>
          <p>List of Names</p>
          <ol>
            {listItems}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
