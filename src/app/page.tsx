import ShopSection from '@/components/ShopSection'
import React from 'react'

function page() {
  return (
    <div >

      <h1 className='text-2xl font-bold pt-10 pb-4'>Espace Pub</h1>
      
      {/* Info */}
      <div className='grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4 h-[385px] max-h-[385px] '>
        <div className='h-[385px] max-h-[385px] rounded-md    xl:col-span-3 md:col-span-2 sm:grid-cols-1 '>
          <img className=' w-full h-full object-cover rounded-md ' src="https://picsum.photos/300/200" alt="" />
        </div>
        <div className=' rounded-md bg-red-400'>
        <img className=' w-full h-full object-cover rounded-md ' src="https://picsum.photos/300/201" alt="" />
        </div>
        
      </div>

      {/* Main */}

   <div className="pt-10 flex flex-col gap-10">
   <ShopSection title="Boutiques" /> 
   <ShopSection title="Restaurants & Hotel" /> 
   <ShopSection title="Agence" /> 
   <ShopSection title="Beauté et Spa" /> 
   </div>

    </div>
  )
}

export default page