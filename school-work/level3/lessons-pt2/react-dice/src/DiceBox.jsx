import { useState } from 'react'


function DiceBox() {
    const [numbers, setNumbers] = useState([1, 3, 6, 5, 2])

    function rollDice(){
        setNumbers( numbers.map(num => num = Math.floor(Math.random() * 6 + 1)))
    }
  return (
    <div className='page'>
        <header>Dice Box</header>
        <div className='diceBox'>   
            <span className='dice'>{numbers[0]}</span>
            <span className='dice'>{numbers[1]}</span>
            <span className='dice'>{numbers[2]}</span>
            <span className='dice'>{numbers[3]}</span>
            <span className='dice'>{numbers[4]}</span>
        </div> 
        <button onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default DiceBox
