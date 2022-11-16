import React from 'react';
import {useState} from 'react';

import { navLinks } from '../data/NavLinks';
import logo from '../assets/musta.png'
const Navbar = () => {
  const[activeLink,setActiveLink] = useState("Home");
  
  return (
    <div className='bg-[#797979] flex p-4 items-center justify-between'>
      <img src={logo} className="w-12 h-12" />
      {navLinks.map((nav, index) => {
        if (index !== 2) {
          return (
            <p key={index} className='text-white font-medium text-xl '>{nav}</p>
          )
        } else {
          return (
            <>
              <p className='text-3xl font-semibold mb-4 text-white flex flex-wrap'>NEW HEAVEN <br /> PROTOCOL</p>
              <p key={index} className='text-white font-medium text-xl'>{nav}</p>
            </>
          )
        }
      })}
    </div>
  )
}

export default Navbar;