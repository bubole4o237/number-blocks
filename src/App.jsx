import { useEffect, useState } from 'react'
import NumberBlocks from './Components/NumberBlocks/NumberBlocks'
import NumberPossibleCombination from './Components/NumberPossibleCombination'
import './App.scss'

function App() {
  const [inputNum, setInputNum] = useState(0)
  const [tens, setTens] = useState(0)
  const [ones, setOnes] = useState(0)

useEffect(() => {
  setTens(Math.floor(inputNum / 10))
  setOnes(inputNum % 10)
}, [inputNum])

  return (
    <div className="App">
      <header className="App-header">
        <input type='number' onChange={(e) => { if (e.target.value <= 201 && e.target.value >=0) setInputNum(Number(e.target.value))}}/>
        <NumberBlocks tens={tens} ones={ones} />
        <NumberPossibleCombination number={inputNum} />
      </header>
    </div>
  )
}

export default App
