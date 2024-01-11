import Link from 'next/link'
import React from 'react'

function ShopSection({title,images,handleItmeClick}:{title:string,images:any[],handleItmeClick?:()=>void}) {
  return (
    <div className="flex w-full flex-col">
    <div className=' w-full text-xl  justify-between flex'>
      <p>{title}</p>
     {title != "" &&  <p className='px-4 cursor-pointer '>plus</p>}
    </div>
    {/* Show */}
    <div className="grid xl:grid-cols-6 md:grid-cols-4 gap-4 mt-2">
      <Link href={`/product/`} >
      <img   className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[0]}`} />
      </Link>
      <img   className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[1]}`} />
      <img   className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[2]}`} />
      <img   className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[3]}`} />
      <img   className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[4]}`} />
      <img   className=" object-cover h-[150px] w-full rounded-md bg-black " src={`${images[5]}`} />

    </div>
  </div>
  )
}

export default ShopSection