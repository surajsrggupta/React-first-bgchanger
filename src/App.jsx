import { useState } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState("olive")

  return (
   
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}> 

      
      <div className='fixed  flex flex-wrap justify-center  bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white bg- px-3 py-2 rounded-xl'> 
          <button onClick={()=>{setColor("red")}} className='outline-none px-5 py-1 text-white shadow-lg  rounded-xl' style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>{setColor("green")}} className='outline-none px-5 py-1 text-white shadow-lg  rounded-xl' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className='outline-none px-5 py-1 text-white shadow-lg  rounded-xl' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("violet")}} className='outline-none px-5 py-1 text-white shadow-lg  rounded-xl' style={{backgroundColor:"violet"}}>Violet</button>
        </div>
      </div>
     </div>
    
  ) 
}

export default App
