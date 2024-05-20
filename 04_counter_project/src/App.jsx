import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = ()=>{
    if(counter+1>20){
      alert("You can not increase the counter greater than 20")
    }else{
      counter=counter+1
      setCounter(counter)
    }
      
  }


const subtractVal =()=>{
  if(counter -1 < 0){
    alert("You can not decrease the counter less than 0")
  }else{
    setCounter(counter - 1)
  }
  
  
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
