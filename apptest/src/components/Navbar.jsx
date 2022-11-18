import React from 'react';
import { useState } from 'react';
import '../styles/index.css';
import { navLinks } from '../data/NavLinks';
import logo from '../assets/musta.png'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <div className='bg-[#797979] flex p-4 items-center justify-between'>
      <img src={logo} className="w-12 h-12" />
      {navLinks.map((nav, index) => {
        if (index !== 2) {
          return (
            <a href={`#${nav}`} key={index} className={activeLink === nav ? 'text-white font-bold font-medium text-xl underline decoration-white decoration-2 decoration-none hover:text-black' : 'text-white font-medium text-xl link hover:text-black'} onClick={() => setActiveLink(nav)}>{nav}</a>
          )
        } else {
          return (
            <>
              <p className='text-3xl font-semibold mb-4 text-white flex flex-wrap'>NEW HEAVEN <br /> PROTOCOL</p>
              <a href={`#${nav}`} key={index} className={activeLink === nav ? "text-white font-bold font-medium text-xl underline decoration-white decoration-2 " : "text-white font-medium text-xl link "} onClick={() => setActiveLink(nav)}>{nav}</a>
            </>
          )
        }
      })}
    </div>
  )
}
export default Navbar;