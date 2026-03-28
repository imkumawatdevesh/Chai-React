import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15;
  
  const addValue = () => {
    // console.log('clicked',Math.random());
    if(counter < 20){
      setCounter(counter+1);
    }
  }

  const subValue = () => {
    // console.log('clicked',Math.random());
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
   <>
    <h1>Chai or React</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}>Increment {counter}</button>
    <br/>
    <button
    onClick={subValue}>Decrement {counter}</button>
    <p>footer: {counter}</p>
   </>
  )
}

export default App
