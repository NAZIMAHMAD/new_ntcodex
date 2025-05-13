import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.jpg'
import { RiMenuAddFill } from "react-icons/ri";





const navbar = () => {
  return (
    <>
    
    
<header className='bg-[#1d2549] h-auto text-white py-5 w-full lg:px-28  px-3' >

<div className='container mx-auto flex lg:justify-between items-center'>

<div className='lg:w-36 w-full h-12 items-center   flex justify-between'>
  <img src={logo} alt="" className='w-36 h-12 object-cover '/>
  <RiMenuAddFill className='lg:hidden  flex text-[#bdf347] text-3xl '/>

</div>

<nav className=' text-[16px] lg:block hidden '>
  <ul className='flex space-x-5 font-medium capitalize text-gray-300'>
    <li className='hover:text-white transition-all duration-300 ease-in-out pointer'> <NavLink>what we offer</NavLink>    </li>
    <li className='hover:text-white transition-all duration-300 ease-in-out pointer'><NavLink>who we are</NavLink>  </li>
    <li className='hover:text-white transition-all duration-300 ease-in-out pointer'><NavLink>insight</NavLink>  </li>
    <li className='hover:text-white transition-all duration-300 ease-in-out pointer'><NavLink>careers</NavLink> </li>
    <li className='hover:text-white transition-all duration-300 ease-in-out pointer'><NavLink>contact</NavLink> </li>
  </ul>
</nav>

<div className='lg:flex space-x-5  h-auto text-2xl text-[#bdf347]  justify-end  hidden '>

<FaInstagram className='hover:text-green-500 transition-all duration-500 ease-in-out hover:scale-110'/>
<CiFacebook className='hover:text-green-500 transition-all duration-500 ease-in-out hover:scale-110'/>
<CiLinkedin className='hover:text-green-500 transition-all duration-500 ease-in-out hover:scale-110'/>

  
</div>


</div>

</header>



    </>
  )
}

export default navbar
