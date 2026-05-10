import React from 'react'

function App() {
  return (
    <div className=' flex flex-col  items-center m-30 gap-10 text-xl'>
      Profile Card
      <div className='flex items-center h-150 w-120 bg-cyan-900 rounded-4xl'>
        <div className='h-2 w-120 bg-amber-800'></div>
      </div>
      <div className=' flex gap-5'>
        <div>
          <button className='h-20 w-60 bg-cyan-950 rounded-full '>Add</button>
        </div>
      </div>

    </div>
  )
}

export default App
