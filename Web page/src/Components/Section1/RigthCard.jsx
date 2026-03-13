import React from 'react'
import RightCardContent from './RightCardContent'

function RigthCard(props) {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl bg-red-500'>
       <img 
         className='h-full w-full object-cover' 
         src={props.img} 
         alt="" 
       />
       <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
         <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
         <RightCardContent color = {props.color} tag ={props.tag} intro = {props.intro} />
       </div>
    </div>
  )
}

export default RigthCard