import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import {LOGO} from '../utils/constants';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const [logIn, setLogIn] = useState(true);

  const handleLogIn = ()=>{
    setLogIn(prevLogIn => !prevLogIn);
  }

  return (
    <div className='w-full h-24 bg-white flex justify-between px-4 items-center md:px-8'>
      <div className=''>
        <img
          className='w-44'
          src={LOGO} alt="logo" />
      </div>
        <ul className='md:flex hidden font-semibold text-[#082f47] md:text-lg'>
          <li className='mx-4'>Individuals</li>
          <li className='mx-4'>Teams</li>
          <li className='mx-4'>Enterprise</li>
          <li className='flex mx-4'>Product <RiArrowDropDownLine className='' size={32}/></li>
          <li className='mx-4'>Pricing</li>
          <li className='flex mx-4'>Resources <RiArrowDropDownLine className='' size={32}/></li>
        </ul>
      <div className='hidden md:flex'>
        <button onClick={handleLogIn} className='text-[#082f47] font-semibold text-md md:text-lg mx-4'>{logIn ? "Log In" : "Log Out"}</button>
        <button className='p-2 md:p-4 py-1 md:py-2 rounded-full bg-blue-600 text-white mx-4 '>Get started</button>
      </div>
      <ul className='md:hidden'>
        <li><GiHamburgerMenu size={28}/></li>
      </ul>
    </div>
  )
}

export default Header;
