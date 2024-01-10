import { LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Sidebar() {
  return (
    <div className='bg-zinc-300/10 p-4 border-r min-w-[250px] w-[250px] h-full'>

<Image className='p-2' src={"/images/logo.png"} width={100} height={100} alt='' />

<div className=' flex flex-col gap-5 pt-10'>

    <p className='flex gap-4 p-2 w-full  hover:bg-orange-400 hover:text-white cursor-pointer rounded-md'> <LayoutDashboard/> Dashboard</p>
    <p className='flex gap-4 p-2 w-full  hover:bg-orange-400 hover:text-white cursor-pointer rounded-md'> <LayoutDashboard/> Dashboard</p>
    <p className='flex gap-4 p-2 w-full  hover:bg-orange-400 hover:text-white cursor-pointer rounded-md'> <LayoutDashboard/> Dashboard</p>
    <p className='flex gap-4 p-2 w-full  hover:bg-orange-400 hover:text-white cursor-pointer rounded-md'> <LayoutDashboard/> Dashboard</p>
    <p className='flex gap-4 p-2 w-full  hover:bg-orange-400 hover:text-white cursor-pointer rounded-md'> <LayoutDashboard/> Dashboard</p>
   

</div>
    </div>
  )
}

export default Sidebar