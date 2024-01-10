import React from 'react'

function page() {
  return (
    <div className='p-10 flex'>
      <div className='grid md:grid-cols-3 xl:grid-cols-4 w-full gap-4'>
     <InfoType/>
     <InfoType/>
     <InfoType/>
     <InfoType/>
     
      </div>
    </div>
  )

  function InfoType() {
    return <div className='bg-zinc-200/30 p-4 rounded-md h-[80px] flex flex-col  justify-between w-full '>
      <p className='text-sm'>Total client</p>
      <p className='text-base font-bold'>10</p>
    </div>
  }
}

export default page