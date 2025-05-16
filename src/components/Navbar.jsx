import React, { useEffect, useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.jpg';
import { RiMenuAddFill } from "react-icons/ri";

const Navbar = () => {
  const [showScrollNavbar, setShowScrollNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollNavbar(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable Nav links
  const NavLinks = () => (
    <ul className='flex space-x-5 font-medium capitalize text-white'>
      <li><NavLink>what we offer</NavLink></li>
      <li><NavLink>who we are</NavLink></li>
      <li><NavLink>insight</NavLink></li>
      <li><NavLink>careers</NavLink></li>
      <li><NavLink>contact</NavLink></li>
    </ul>
  );

  const SocialIcons = () => (
    <div className='lg:flex space-x-5 text-2xl text-[#bdf347] hidden'>
      <FaInstagram className='hover:text-green-500 hover:scale-110 transition' />
      <CiFacebook className='hover:text-green-500 hover:scale-110 transition' />
      <CiLinkedin className='hover:text-green-500 hover:scale-110 transition' />
    </div>
  );

  return (
    <>
      {/* ✅ Default Navbar - Always Visible */}
      <header className='bg-gradient-to-r fixed top-0 left-0 w-full  from-[#1d2549] via-[#365200] to-[#1d2549] text-white py-5 lg:px-28 px-3 '>
        <div className='container mx-auto flex lg:justify-between items-center'>
          <div className='lg:w-36 w-full h-12 flex justify-between items-center'>
            <img src={logo} alt="Logo" className='w-36 h-12 object-cover' />
            <RiMenuAddFill className='lg:hidden text-[#bdf347] text-3xl' />
          </div>
          <nav className='text-[16px] lg:block hidden'>
            <NavLinks />
          </nav>
          <SocialIcons />
        </div>
      </header>

      {/* 🔽 Scroll Navbar - Shows After Scroll */}
      <header
        className={`
          fixed top-0 left-0  shadow z-30 w-full
          bg-gradient-to-r from-[#1d2549] via-[#365200] to-[#1d2549]
          text-white py-4 lg:px-28 px-3 
          transform transition-all duration-500 ease-in-out
          ${showScrollNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className='container mx-auto flex lg:justify-between items-center'>
          <div className='lg:w-36 w-full h-12 flex justify-between items-center'>
            <img src={logo} alt="Logo" className='w-36 h-12 object-cover' />
            <RiMenuAddFill className='lg:hidden text-[#bdf347] text-3xl' />
          </div>
          <nav className='text-[16px] lg:block hidden'>
            <NavLinks />
          </nav>
          <SocialIcons />
        </div>
      </header>
    </>
  );
};

export default Navbar;
