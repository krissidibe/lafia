import React from 'react'

function ShopSection({title}:{title:string}) {
  return (
    <div className="flex w-full flex-col">
    <div className=' w-full text-xl  justify-between flex'>
      <p>{title}</p>
      <p className='px-4 cursor-pointer '>plus</p>
    </div>
    {/* Show */}
    <div className="grid xl:grid-cols-6 md:grid-cols-4 gap-4 mt-2">
      <div className="h-[150px] w-full rounded-md bg-black "></div>
      <div className="h-[150px] w-full rounded-md bg-black "></div>
      <div className="h-[150px] w-full rounded-md bg-black "></div>
      <div className="h-[150px] w-full rounded-md bg-black "></div>
      <div className="h-[150px] w-full rounded-md bg-black "></div>
      <div className="h-[150px] w-full rounded-md bg-black "></div>

    </div>
  </div>
  )
}

export default ShopSection