import React from 'react'

function ShopSection({title,images}:{title:string,images:any[]}) {
  return (
    <div className="flex w-full flex-col">
    <div className=' w-full text-xl  justify-between flex'>
      <p>{title}</p>
      <p className='px-4 cursor-pointer '>plus</p>
    </div>
    {/* Show */}
    <div className="grid xl:grid-cols-6 md:grid-cols-4 gap-4 mt-2">
      <img className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[0]}`} />
      <img className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[1]}`} />
      <img className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[2]}`} />
      <img className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[3]}`} />
      <img className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[4]}`} />
      <img className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[5]}`} />

    </div>
  </div>
  )
}

export default ShopSection