import { useState } from 'react'
import Square from './Square'

function App() {
  const [color, setColor] = useState(["white", "white", "white", "white"])
  
  function sTimeDJ(){ setColor(prev => prev[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"] ) }
  
  function pDJ(){ setColor(prev => ["purple", "purple", prev[2], prev[3]]) }

  function lBlue(){ setColor(prev => [prev[0], prev[1], "blue", prev[3]]) }

  function rBlue (){ setColor(prev => [prev[0], prev[1], prev[2], "blue"]) }

  function bDJ1(){ setColor(prev => ["red", prev[1], prev[2], prev[3]]) }

  function bDJ2(){ setColor(prev => [prev[0], "orange", prev[2], prev[3]]) }

  function bDJ3(){ setColor(prev => [prev[0], prev[1], "yellow", prev[3]]) }

  function bDJ4(){ setColor(prev => [prev[0], prev[1], prev[2], "green"]) }
    
  return (
    <div className='colorBoard'>
      <Square color={color[0]}/>
      <Square color={color[1]}/>
      <Square color={color[2]}/>
      <Square color={color[3]}/>
      <button onClick={sTimeDJ}>Small Time DJ</button>
      <button onClick={pDJ}>Party DJ</button>
      <button onClick={lBlue}>Left Blue</button>
      <button onClick={rBlue}>Right Blue</button>
      <button onClick={bDJ1}>Big DJ 1</button>
      <button onClick={bDJ2}>Big DJ 2</button>
      <button onClick={bDJ3}>Big DJ 3</button>
      <button onClick={bDJ4}>Big DJ 4</button>
    </div>
  )
}

export default App
