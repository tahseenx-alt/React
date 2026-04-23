import React, { useState } from 'react'
import Greeting from '../Components/Greeting'
function App() {
  const [textcolor, settextcolor] = useState('text-white')
  const [buttoncolor, setButtoncolor] = useState('bg-purple-600')
  const cliked = () => {
    console.log("button is clicked ");
    settextcolor('text-red-400')
    setButtoncolor('bg-pink-800')
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center p-8 bg-cyan-800">
        <h1 className={`text-6xl ${textcolor}`}>Hloo I am starting React!</h1>
        <Greeting  name="Alice" age={28}/>
        <button onClick={cliked} className={`mt-4 p-4  ${buttoncolor}`}>Get Started</button>
      </div>
    </div>
  )
}

export default App
