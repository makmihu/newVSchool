import React from 'react'

function App() {
  const [color, setcolor] = React.useState("")
  const [clicks, setclicks] = React.useState(0)

  React.useEffect(() => {
    fetch("https://random-color.onrender.com/colors/random")
      .then(res => res.json())
      .then(data => setcolor(data.rgb))
  }, [clicks])

  const styles = {
    backgroundColor: color
  }
  function handleClick(event){
    event.preventDefault()
    setclicks(prev => prev + 1)
  }

  return (
    <div className='main'>
      <div className='box' style={styles}></div>
      <button onClick={handleClick}>Generate Random Color</button>
    </div>
  )
}

export default App
