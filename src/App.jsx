import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-cyan-300 rounded-2xl' > 
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-red-500' onClick={()=>{setColor("red")}}>Red</button> 
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-green-500' onClick={()=>{setColor("green")}}>Green</button>
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-blue-500' onClick={()=>{setColor("blue")}}>Blue</button>
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-yellow-500' onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-orange-500' onClick={()=>{setColor("orange")}}>Orange</button>
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-purple-500' onClick={()=>{setColor("purple")}}>Purple</button>
        <button className='outline-none py-1 px-4 rounded-full text-white shadow-lg bg-black' onClick={()=>{setColor("black")}}>Black</button>
        <button className='outline-none py-1 px-4 rounded-full text-black shadow-lg bg-white' onClick={()=>{setColor("white")}}>White</button> </div>
      </div>
    </div>
  )
}

export default App
