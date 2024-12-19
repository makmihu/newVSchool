import { useState } from 'react'
import Half from './Half'
import ColorSelector from './ColorSelector'

function App() {
  const [gradient, setGradient] = useState({
    color1: "#fbd2c8",
    color2: "#df536c",
    angle: 50
  })
  function handleChange(event){
    const {name, value,} = event.target
    setGradient(prev => {
        return {
            ...prev,
            [name]: value
        }
    })
  }
  return (
    <div>
      <header>CSS Gradient Code Generator</header>
      <main>
        <Half>
          <div className='gradient' style={{background: `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`}}></div>
          {/* <textarea 
            className='codeDisplay' 
            readOnly 
            value="background: linear-gradient(50deg, #FFFF00 , #000000);  moz-background: linear-gradient(50deg, #FFFF00 , #000000); webkit: linear-gradient(50deg, #FFFF00 , #000000)"
          /> */}
          <div className="codeDisplay">
            <p>{`background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2});`}</p>
            <p>{`moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2});`}</p>
            <p>{`webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`}</p>
          </div>
        </Half>
          
        <Half>
          <h1 className='optionsHeader'>Options</h1>
          <ColorSelector color={gradient.color1} number={1} handleChange={handleChange} name={"color1"} />
          <ColorSelector color={gradient.color2} number={2} handleChange={handleChange} name={"color2"} />
          <label className='angle'>
            Angle
            <input type='number' className='angleInput' name='angle' onChange={handleChange}/>
          </label>
        </Half>
      </main>
    </div>
  )
}

export default App
