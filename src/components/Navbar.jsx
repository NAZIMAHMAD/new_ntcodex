import React, { useEffect, useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.jpg';
import { RiMenuAddFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";







const Navbar = () => {
  const [showScrollNavbar, setShowScrollNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollNavbar(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [navbar, setNavbar] = useState(false);

  // Reusable Nav links
  const NavLinks = () => (
    <ul className='flex lg:space-x-5  space-y-3 lg:space-y-0 lg:text-[16px] text-[#1d2549] text-[14px] lg:flex-row flex-col font-medium capitalize lg:text-white'>
      <li className=' lg:hidden flex' onClick={() => setNavbar(false)}>      <FaRegRectangleXmark className='text-2xl'/>
</li>

      <li className='lg:hover:text-[#bdf347] transition-all pt-4 lg:pt-0 lg:hover:scale-90'><NavLink to="/What_We_Offer">what we do</NavLink></li>
      <li className='lg:hover:text-[#bdf347] transition-all lg:hover:scale-90'><NavLink to="/Who_We_Are">who we are
        </NavLink></li>
      <li className='lg:hover:text-[#bdf347] transition-all lg:hover:scale-90'><NavLink to="/Insight">insight</NavLink></li>
      <li className='lg:hover:text-[#bdf347] transition-all lg:hover:scale-90'><NavLink to="/Careers">careers</NavLink></li>
      <li className='lg:hover:text-[#bdf347] transition-all lg:hover:scale-90'><NavLink to="/What_is_in_your_mind">contact us</NavLink></li>
    </ul>
  );

  const SocialIcons = () => (
    <div className='lg:flex space-x-5 text-2xl lg:text-white hidden'>
     <a href="https://www.instagram.com/ntcodexsystems_website_app_dev?igsh=N2szcXR5c3ozNGlr"> <FaInstagram className='lg:hover:text-[#bdf347] lg:hover:scale-110 transition ' /></a>
     <a href="https://www.linkedin.com/in/nazim-ahmad-0a2735219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <CiLinkedin className='lg:hover:text-[#bdf347]  lg:hover:scale-110 transition' /></a>
     <a href="https://x.com/NtcodexS?t=JUdUMpHES4-ABv2oCwK8qw&s=09"> <FaXTwitter className='lg:hover:text-[#bdf347] lg:hover:scale-110 transition'/></a>

    </div>
  );

  return (
    <>
      {/* ✅ Default Navbar - Always Visible */}
      <header className='bg-gradient-to-r    top-0 relative  left-0 w-full  from-[#1d2549] via-[#365200] to-[#1d2549] text-white py-5 lg:px-28 px-3 '>
        <div className='container    rounded-full p-3  bg-[#365200]/60 mx-auto flex lg:justify-between items-center'>
          <div className='lg:w-36 w-full h-12 flex justify-between items-center'>
           <NavLink to="/"> 
           <img src={logo} alt="Logo" className='w-36 h-12 object-cover' /> 
           </NavLink> 
            <RiMenuAddFill className='lg:hidden text-[#bdf347] text-3xl' onClick={() => setNavbar(true)}/>
          </div>
          <nav className={`  lg:gap-y-12 gap-12  z-40 fixed ps-[1rem] py-[5rem] lg:ps-0 lg:py-0  w-[80%] sm:w-[30%]  lg:w-auto  h-screen overflow-auto lg:h-auto  lg:relative lg:top-auto lg:right-auto top-0 right-0 bg-[#bdf347] lg:bg-transparent  transition-all duration-500 flex-col lg:translate-x-0   ${navbar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:translate-x-0 lg:opacity-100 `}>
            <NavLinks />
           
 <div className='lg:hidden mt-8 flex space-x-5 text-2xl lg:text-[#bdf347] text-[#1d2549] '>
     <a href="https://www.instagram.com/ntcodexsystems_website_app_dev?igsh=N2szcXR5c3ozNGlr"> <FaInstagram className='lg:hover:text-white lg:hover:scale-110 transition' /></a>
     <a href="https://www.linkedin.com/in/nazim-ahmad-0a2735219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <CiLinkedin className='lg:hover:text-white lg:hover:scale-110 transition' /></a>
     <a href="https://x.com/NtcodexS?t=JUdUMpHES4-ABv2oCwK8qw&s=09"> <FaXTwitter className='lg:hover:text-white lg:hover:scale-110 transition'/></a>

    </div>


<div className=' grid grid-cols-1 gap-2 lg:hidden mt-4'>

<div className='flex gap-2 justify-start items-center text-[#1d2549]'>
  <IoIosCall />
<a href="tel:9113499324" className='font-bold'>+91-9113499324</a>

</div>

<div className='flex gap-2 justify-start items-center text-[#1d2549]'>
<MdMarkEmailUnread />
<a href="mailto:zk8052272@gmail.com" className='font-bold'>zk8052272@gmail.com</a>

</div>

</div>


          </nav>
          <SocialIcons />
        </div>


      </header>

      {/*  Scroll Navbar - Shows After Scroll */}
      <header
        className={`
          fixed top-0 left-0 z-[4]   w-full
          bg-gradient-to-r from-[#1d2549]  via-[#365200] to-[#1d2549]
          text-white py-4 lg:px-28 px-3 
          transform transition-all duration-500 ease-in-out
          ${showScrollNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className='container mx-auto flex lg:justify-between items-center'>
          <div className='lg:w-36 w-full h-12 flex justify-between items-center '>
            <img src={logo} alt="Logo" className='w-36 h-12 object-cover' />
            <RiMenuAddFill className='lg:hidden text-[#bdf347] text-3xl' onClick={ () => setNavbar(true)}/>
          </div>
          <nav className='text-[16px] hidden lg:flex z-[8]   w-[80%] lg:w-auto  h-screen lg:h-auto absolute lg:relative lg:top-auto lg:right-auto top-0 right-0 bg-[#bdf347] lg:bg-transparent  flex-col '>
            <NavLinks />
             <div className='lg:hidden flex space-x-5 text-2xl lg:text-[#bdf347] text-[#1d2549] '>
     <a href="https://www.instagram.com/ntcodexsystems_website_app_dev?igsh=N2szcXR5c3ozNGlr"> <FaInstagram className='lg:hover:text-white lg:hover:scale-110 transition' /></a>
     <a href="https://www.linkedin.com/in/nazim-ahmad-0a2735219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <CiLinkedin className='lg:hover:text-white lg:hover:scale-110 transition' /></a>
     <a href="https://x.com/NtcodexS?t=JUdUMpHES4-ABv2oCwK8qw&s=09"> <FaXTwitter className='lg:hover:text-white lg:hover:scale-110 transition'/></a>

    </div>
          </nav>
          <SocialIcons />
        </div>
      </header>
    </>
  );
};

export default Navbar;
