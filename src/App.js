import './App.scss';
import { useEffect, useState } from 'react';
import NumberBlocks from './Components/NumberBlocks/NumberBlocks';

function App() {
  const [inputNum, setInputNum] = useState(0)
  const [tens, setTens] = useState(0)
  const [ones, setOnes] = useState(0)

useEffect(() => {
  setTens(Math.floor(inputNum / 10))
  setOnes(inputNum % 10)
}, [inputNum])

  console.log('inputNum', inputNum);
  console.log('tens', tens);
  console.log('ones', ones);
  return (
    <div className="App">
      <header className="App-header">
        <input type='number' onChange={(e) => setInputNum(Number(e.target.value))}/>
        <NumberBlocks tens={tens} ones={ones} />
      </header>
    </div>
  );
}

export default App;
