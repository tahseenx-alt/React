import React from 'react'

function App() {
  return (
    <div className=' flex flex-col  items-center m-30 gap-10 text-xl'>
      Profile Card
      <div className='flex flex-col items-center h-150 w-120 gap-5 bg-cyan-900 rounded-4xl'>
        <div className='flex h-1/4 w-full  rounded-full bg-amber-300'>
          <img className='h-3/4 m-5 rounded-full object-cover'
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className='p-5 text-black' > Tahseen Anwer</div>
        </div>
        <div className='h-3/4 w-full p-5 rounded-4xl bg-amber-300'>
            Details
        </div>
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
