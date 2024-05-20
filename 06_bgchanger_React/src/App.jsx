import { useState } from "react"



function App() {
 
const [color,setColor]=useState("olive")
  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-3 rounded-xl">
            <button onClick={()=>setColor("red")} className="outline-none px-4" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4" style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>setColor("aqua")} className="outline-none px-4" style={{backgroundColor:"aqua"}}>aqua</button>
            <button onClick={()=>setColor("pink")} className="outline-none px-4" style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4" style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>setColor("purple")} className="outline-none px-4" style={{backgroundColor:"purple"}}>purple</button>
            <button onClick={()=>setColor("orange")} className="outline-none px-4" style={{backgroundColor:"orange"}}>orange</button>
            
          </div>
        </div>
      </div>
    
  )
}

export default App
