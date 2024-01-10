import React from 'react'
import { Input } from '../../../components/ui/input'
import { ShoppingBasket, UserIcon } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'

function NavbarCustomer() {
  return (
    
        <div className='h-[70px] flex   z-50 items-center px-10 w-auto   justify-between gap-4  bg-zinc-300/10 p-4 border-b  '>
          <div>
           Dashboard
          </div>
            
           <div className='flex-1 flex gap-4 max-w-xl'>
           <Input
            
            />
<Button>Recherche</Button>
           </div>
            <div className=' flex gap-4'>
                <p className='flex gap-1 justify-center items-center'>
                <UserIcon/>
                    Aboubacar Sidiki Sidibé</p>
                
            </div>
            
        </div>
  
  )
}

export default NavbarCustomer