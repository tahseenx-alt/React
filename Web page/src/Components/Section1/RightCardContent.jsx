import React from 'react'

function RightCardContent(props) {
  return (
            <div>
            <p className='text-white text-m leading-relaxed mb-10'>{props.intro}</p>
            <div className=' flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' font-medium px-8  py-2 rounded-full  '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='font-medium px-4  py-2 rounded-full  '><i className="ri-arrow-right-line"></i></button>
            </div>
         </div>
  )
}

export default RightCardContent
