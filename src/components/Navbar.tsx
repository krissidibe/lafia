import React from 'react'
import { Input } from './ui/input'
import { ShoppingBasket, UserIcon } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='bg-white border-b border-black w-full fixed z-50 flex flex-row  items-center justify-center'>
        <div className='h-[70px] flex   z-50 items-center px-10 max-w-7xl w-full   justify-between gap-4 items-center '>
          <div>
            <Image src={"/images/logo.png"} width={100} height={100} alt='' />
          </div>
            
           <div className='flex-1 flex gap-4 max-w-xl'>
           <Input
            
            />
<Button>Recherche</Button>
           </div>
            <div className=' flex gap-4'>
                <p className='flex gap-1 justify-center items-center'>
                <UserIcon/>
                    Se connecter</p>
                <p className='flex gap-1 justify-center items-center'>
                <ShoppingBasket/>
                    Panier</p>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar