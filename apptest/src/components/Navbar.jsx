import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { navLinks } from '../data/NavLinks';
import { FiMenu } from 'react-icons/fi';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [responsive, setResponsive] = useState(false);
  const dropDownNav = useRef(null);
  useEffect(() => {
    const clickEvent = document.addEventListener("mousedown", (event) => {
      if (!dropDownNav.current.contains(event.target)) {
        setResponsive(false)
      }
    });
    return document.removeEventListener("mousedown", () => clickEvent)
  })
  return (
    <div className='bg-[#797979] flex p-4 items-center justify-between '>
      <img src='/musta.png' className="w-12 h-12" />
      {responsive && (

        <div ref={dropDownNav} className='absolute bg-white flex flex-col top-24 right-4 space-x-6 text-sm text-[gray]'>
          {navLinks.map((link, index) => {
            return (
              <a href={`#${link}`} key={index} className={activeLink === link ? ' text-center text-black font-bold font-medium text-xl underline decoration-white decoration-2 decoration-none hover:text-black' : ' text-center text-[gray] font-medium text-xl link hover:text-black'} onClick={() => setActiveLink(nav)}>{link}</a>
            )
          })}


        </div>
      )}

      {navLinks.map((nav, index) => {
        if (index !== 2) {
          return (
            <a href={`#${nav}`} key={index} className={activeLink === nav ? 'text-white font-bold font-medium text-xl underline decoration-white decoration-2 decoration-none hover:text-black md:hidden' : 'text-white font-medium text-xl link hover:text-black md:hidden'} onClick={() => setActiveLink(nav)}>{nav}</a>
          )
        } else {
          return (
            <>
              <p className='text-3xl font-semibold mb-4 text-white flex flex-wrap'>NEW HEAVEN <br /> PROTOCOL</p>
              <a href={`#${nav}`} key={index} className={activeLink === nav ? "text-white font-bold font-medium text-xl underline decoration-white decoration-2 md:hidden " : "text-white font-medium text-xl link md:hidden hover:text-black"} onClick={() => setActiveLink(nav)}>{nav}</a>
            </>
          )
        }
      })}
      <div className='hidden md:flex md:mt-4 '>
        <button onClick={() => setResponsive((prev) => !prev)}><FiMenu /></button>
      </div>
    </div>
  )
}
export default Navbar;
