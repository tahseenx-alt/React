import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content(props) {
  console.log(props.users);
  
  return (
    <div className=' p-6 h-[90vh] flex gap-10 items-center'>
     <LeftContent />
     <RightContent users = {props.users }/>
    </div>
  )
}

export default Page1Content
