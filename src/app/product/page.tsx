import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";
import ShopSection from "@/components/ShopSection";
function page() {
  return (
    <div className="px-10 xl:px-0 pt-10 flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 mb-20 md:grid-cols-3 gap-4 h-[385px] max-h-[385px] ">
        <div className=" xl:col-span-2 md:col-span-2 sm:grid-cols-1  ">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              className=" object-cover   rounded-md bg-black "
              src={`https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            />
          </AspectRatio>
        </div>
        <div className="  col-span-2 rounded-md flex flex-col gap-1">
          <h1 className="font-bold">Nom de l'article</h1>
          <p className="text-base underline" >Description</p>
          <p className="text-sm opacity-70" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ullam necessitatibus ab consequatur quasi tenetur soluta est deleniti sint reprehenderit natus quis voluptas, sunt officia. Odit suscipit ducimus sequi architecto ipsum dolor sit amet consectetur adipisicing elit. Unde ullam necessitatibus ab consequatur quasi tenetur soluta est deleniti sint reprehenderit natus quis voluptas, sunt officia. Odit suscipit ducimus sequi architecto!</p>
          <h1 className="font-bold">70.000 Fcfa</h1>

          <p className="text-base underline mt-4" >OumiShop</p>
          <p className="text-sm opacity-70" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ullam necessitatibus ab consequatur quasi tenetur soluta est deleniti sint reprehenderit natus quis voluptas, sunt officia. Odit suscipit ducimus sequi architecto ipsum dolor sit amet consectetur adipisicing elit!</p>
          <h1 className="font-bold flex items-center gap-2 mt-4"> <PhoneCallIcon/> 70708080 </h1>
        </div>
      </div>

      <ShopSection title=""
   images={[
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683121993443-9d4fbc308de3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664372599811-0aa42648d1e6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664372599757-2f60a17190aa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664202526068-3eba0944f7d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
   ]}
   
   /> 
      <ShopSection title=""
   images={[
       "https://plus.unsplash.com/premium_photo-1683121993443-9d4fbc308de3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://plus.unsplash.com/premium_photo-1664372599757-2f60a17190aa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://plus.unsplash.com/premium_photo-1664372599811-0aa42648d1e6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://plus.unsplash.com/premium_photo-1664202526068-3eba0944f7d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
   ]}
   
   /> 
    </div>
  );
}

export default page;
