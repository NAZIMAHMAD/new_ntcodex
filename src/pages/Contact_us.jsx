import React from 'react';
import { NavLink } from 'react-router-dom';
import Img26 from '../assets/Images/img26.jpg'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSolidMessageAltDots } from "react-icons/bi";




const Contact_us = () => {
  return (

    <section className='w-full h-auto   md:h-screen grid lg:grid-cols-2 grid-cols-1' >



      <div className=' bg-[#bdf347] md:px-20 md:py-10 px-3 py-8  grid gap-5 overflow-auto hide-scrollbar'>

        <div className='uppercase font-bold  text-[#1d2549]'>
                    <MdOutlineKeyboardArrowLeft className='inline-block text-2xl'/>

          <NavLink className="" to='/' >
 back
          </NavLink>
        </div>

        <div className='grid grid-cols-1 gap-4 '>

<div className='flex items-center gap-3'>

<BiSolidMessageAltDots className='text-3xl text-[#1d2549]'/>

          <h1 className='uppercase font-extrabold text-2xl lg:text-3xl text-[#1d2549]' 
> 
Request for Services
</h1>


</div>

<p>We’ve driven growth and purposeful transformation across every industry and we’re excited to build on your belief. Tell us a bit more about yourself, so we can get the ball rolling.</p>

<div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>


<div className='grid grid-cols-1 '>
  <label htmlFor="" className='font-medium'>Full name</label>
  <input type="text" placeholder=''  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Last name</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Email</label>
  <input type="email:"  placeholder='info@ntcodexsystems.com' className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Contact number</label>
  <input type="tel:" placeholder='+91-1234-345-567'  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Organization </label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Region</label>

  <select name="" id="" className='h-10 text-[14px]  uppercase border-b-2 outline-none bg-transparent border-[#1d2549]'>

<option value="" >Select</option>

<option value="">india</option>
<option value="">austrlia</option>
<option value="">england</option>
<option value="">New Zealand </option>
<option value="">bangladesh</option>
<option value="">saudi</option>
<option value="">qater</option>
<option value="">dubai</option>
<option value="">kuwait</option>






  </select>


</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Industry</label>
 <select name="" id="" className='h-10 text-[14px]  uppercase border-b-2 outline-none bg-transparent border-[#1d2549]'>

<option value="" >Select</option>

<option value="">banking
</option>
<option value="">Retail</option>
<option value="">Communications, Media, and Information Services
</option>
<option value="">Travel & logistices
 </option>
<option value="">Education
</option>
<option value="">Public services
</option>
<option value="">Healthcare
</option>
<option value="">High tech
</option>
<option value="">Insurance
</option>
<option value="">Consumer and good distribution
</option>

  </select>
</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>How we can help you ?</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className="md:col-span-2 grid">
    <div className="flex space-x-3  items-center  ">
      <input type="checkbox" className="accent-[#1d2549]  w-4 h-4  " />
      <p className='text-[14px]'>
        I consent to processing my personal data entered for ntcodex systems to contact me.
      </p>
  </div>
</div>
<div className="md:col-span-2 grid">
    <div className="flex space-x-3 items-center  ">
      <input type="checkbox" className="w-4 h-4 accent-[#1d2549]" />
      <p className='text-[14px]'>
        i would like to recieve the details about products, and services from ntcodex systems
      </p>
  </div>
</div>


</div>

        </div>

        <div className='h-12 bg-[#1d2549] md:w-56  rounded-3xl grid place-content-center text-white text-md'>
  <button type="text"  className='h-full font-medium  outline-none bg-[#1d2549]'/> SEND THE REQUEST <button/>

</div>

      </div>

      <div className='w-auto h-screen lg:flex hidden' style={{ backgroundImage: `url(${Img26})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      </div>


    </section>

  );
};

export default Contact_us;
