import ShopSection from '@/components/ShopSection'
import React from 'react'

function page() {
  return (
    <div className=' px-10 xl:px-0' >

      <h1 className='text-2xl font-bold pt-10 pb-4'>Espace Pub</h1>
      
      {/* Info */}
      <div className='grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4 h-[385px] max-h-[385px] '>
        <div className='h-[385px] max-h-[385px] rounded-md    xl:col-span-3 md:col-span-2 sm:grid-cols-1 '>
          <img className=' w-full h-full object-cover rounded-md ' src="https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=1756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='  h-[385px] max-h-[385px] rounded-md'>
        <img className=' w-full h-full object-cover rounded-md ' src="https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        
      </div>

      {/* Main */}

   <div className="pt-10 flex flex-col gap-10">
   <ShopSection title="Boutiques"
   images={[
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683121993443-9d4fbc308de3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664372599811-0aa42648d1e6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664372599757-2f60a17190aa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664202526068-3eba0944f7d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
   ]}
   
   /> 
   <ShopSection title="Restaurants & Hotel"
   images={[
    "https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=",
    "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal-1024x680.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/05/d4/83/3f/fast-food-restaurant.jpg",
    "https://lh3.googleusercontent.com/e8aD2q1til8ho4Gz82-G8GuHH-q5STXVOgJ04RP8EIFFrwZ7ZVk5mjD3ziSnh3UREyV3vDSgeW-gZuksiaT4Hw=w5281-h5281-c-rj-v1-e365",
    "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal-1024x680.jpg",
    "https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg",
    
   ]}
   
   /> 
   <ShopSection title="Agence"
   images={[
    "https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2020/11/creer-une-agence-de-voyage.png",
    "https://www.tiz.fr/app/uploads/2019/09/agence-digitale-strasbourg-alsace-tiz-1.jpg",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.conseil-entreprise.org%2Fcomment-choisir-une-societe-de-nettoyage-pour-son-entreprise%2F&psig=AOvVaw3HcGAMCUOR-EvAFB-QUp3K&ust=1705058322465000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICwzbGb1YMDFQAAAAAdAAAAABAD",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMfYAPmYItrGON-pIZpNcPQocenkz3fpkJQ&usqp=CAU",
    "https://kretzrealestate.com/static/3096734d2103b5dd7cb3ef24ef233b42/325e8/a9.png",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yumens.fr%2Fexpertise%2Fsea%2F&psig=AOvVaw1ssNvBA0nyf52oxN8U8897&ust=1705058209648000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiN9Zeb1YMDFQAAAAAdAAAAABAb",
   
    
   ]}
   
   /> 
  {/*  <ShopSection title="" /> 
   <ShopSection title="" /> 
   <ShopSection title="Beauté et Spa" />  */}
   </div>

    </div>
  )
}

export default page