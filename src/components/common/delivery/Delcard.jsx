import React from 'react'

function Delcard({itemname,itemimg}) {
  return (
    <div  >
       <img className='w-[150px] rounded-full' src={itemimg} alt="" />
        <div className='text-center'>{itemname}</div>
    </div>
  )
}

export default Delcard