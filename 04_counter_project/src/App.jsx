import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = ()=>{
      counter=counter+1
      setCounter(counter)
  }


const subtractVal =()=>{
  
  setCounter(counter - 1)
}

  return (
    <>
    
      <h1>ReactJS Padh raha hu bhai😎!!!</h1>
      <h2>Maza ara hai Padhne mein😎😍!!</h2>

      <h2>Counter Value : {counter}</h2>
      

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subtractVal}>Subtract Value</button>
    </>
  )
}

export default App
