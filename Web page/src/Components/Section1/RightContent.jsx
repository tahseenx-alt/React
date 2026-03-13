import React from 'react'
import RigthCard from './RigthCard'
import RightCardContent from './RightCardContent'

function RightContent(props) {
  return (
    <div id='right' className='h-full w-2/3  p-10 overflow-x-auto flex  flex-nowrap gap-10 rounded-4xl'>
      {props.users.map(function(elem ,idx){
        return <RigthCard key = {idx} id={idx} color ={elem.color}  img={elem.img} tag={elem.tag} intro = {elem.intro} />
      })}
    </div>
  )
}

export default RightContent
