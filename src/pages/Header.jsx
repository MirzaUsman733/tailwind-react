import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
export default function Header() {
  const[toggle,setToggle] = useState(false);
  return (
    <div className='bg-black text-white p-5'>
      <div className='max-w-[1240px] py-2 items-center flex justify-between mx-auto'>
        <div className='text-3xl font-bold'>Navbar</div>
        {
          toggle ? 
          <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden block'/>
:

        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden block'/>
        }
      <ul className='hidden md:flex gap-10'>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* Responsive menu */}
      <ul className={`duration-500 md:hidden fixed bg-slate-900 top-[84px] h-screen w-full space-y-7 ps-3
         ${toggle ? `left-0` : `left-[-100%]`}`}>
        <li></li>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    </div>
  )
}
