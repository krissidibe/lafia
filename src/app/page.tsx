import ShopSection from '@/components/ShopSection'
import React from 'react'

function page() {
  return (
    <div >

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
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant-food&psig=AOvVaw2Fn-ISMmQC0GaAjK3e7zPf&ust=1705004335207000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwir45if0tODAxVoVaQEHfOtBjMQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tasteofhome.com%2Fcollection%2Fsoul-food-restaurants%2F&psig=AOvVaw1OZgtM0X-_kzOqeYQCxdPV&ust=1705004336434000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjt1OOf0tODAxUBnCcCHfRzAIoQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.timesofindia.com%2Flife-style%2Ffood-news%2Fworlds-legendary-restaurant-list-includes-7-indian-restaurants%2Farticleshow%2F101282780.cms&psig=AOvVaw0mAjFd2jhCKOyhE1QkiFv2&ust=1705004337404000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwix7p6g0tODAxVd7AIHHVXCCE8QjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cbsnews.com%2Fnews%2Frestaurant-meals-can-be-as-bad-for-you-as-fast-food%2F&psig=AOvVaw2vqeTyfVbDKrBc7icJfkjy&ust=1705004338360000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiRotmg0tODAxXx7gIHHcjkBHMQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tastingtable.com%2F1178512%2Fcelebrity-chefs-and-their-favorite-fast-food-restaurants%2F&psig=AOvVaw2tZLYUgiHnu-iso5L0l6dT&ust=1705004339167000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwj5voqh0tODAxWlkicCHV4vDHsQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yemeksepeti.com%2Fen%2Frestaurant%2Fqw7x%2Frango-fine-fast-food&psig=AOvVaw2tZLYUgiHnu-iso5L0l6dT&ust=1705004339167000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNj0pLXS04MDFQAAAAAdAAAAABAD",
    
   ]}
   
   /> 
   <ShopSection title="Agence"
   images={[
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laresidence.fr%2Fagences-immobilieres%2Fbeauchamp&psig=AOvVaw2Fu2hWGSTP7euT55j34lrx&ust=1705004416221000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjovenF0tODAxWSwwIHHQf0DvQQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lecoindesentrepreneurs.fr%2Fcreer-une-agence-de-voyage%2F&psig=AOvVaw0SFlnZr45BTwCgvGcVDAPO&ust=1705004418642000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjdnv3G0tODAxVU7AIHHYe2BVYQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.illico-travaux.com%2Flocaux-professionnels%2Famenager-une-agence-immobiliere%2F&psig=AOvVaw0IzjXpFH5XC2ZWVPGnZNWj&ust=1705004420171000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwigytrH0tODAxVW3QIHHTGUBdkQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.solocal.com%2Fressources%2Farticles%2Fchoisir-agence-communication-digitale&psig=AOvVaw0OldyhlwNmY8X92FWgCuhf&ust=1705004421164000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjwm5fI0tODAxUG3gIHHfSHAi8QjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pole-emploi.fr%2Factualites%2Fle-dossier%2Fcommerce-vente%2Fcommerciale%2Fchef-dagence-hf.html&psig=AOvVaw1D2VTdWI_H2GQCVe5FO-te&ust=1705004422119000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwi4vtHI0tODAxWb6AIHHSm2BGEQjRx6BAgAEBY",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flatlooker.com%2Fressources%2Farticles%2Fagences-immobilieres-en-ligne-comparatif-agences-classiques&psig=AOvVaw39U6JyoDX9DnfCTjtoi42K&ust=1705004423888000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiPt73J0tODAxVA-gIHHbqAAtkQjRx6BAgAEBY",
    
   ]}
   
   /> 
  {/*   
   <ShopSection title="Beauté et Spa" />  */}
   </div>

    </div>
  )
}

export default page