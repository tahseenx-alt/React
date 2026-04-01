import React, { useState } from 'react'


function App() {
const [num, setNum] = useState(0)

 function increasenumber(){
  setNum(num+1)
 }
 function decreasenumber(){
  setNum(num-1)
 }
 function reset(){
  setNum(0)
 }
  return (
    <div className='centre'>
      <div><h1>{num} </h1></div>
      <button onClick={increasenumber} >Increase</button>
      <button onClick={decreasenumber}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
