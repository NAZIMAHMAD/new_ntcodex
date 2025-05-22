import React from 'react';
import { NavLink } from 'react-router-dom';
import Img26 from '../assets/Images/img26.jpg'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";



const Contact_us = () => {
  return (

    <section className='w-full h-auto   md:h-screen grid lg:grid-cols-2 grid-cols-1' >



      <div className=' bg-[#bdf347] md:px-20 md:py-10 px-3 py-8  grid gap-5 '>

        <div className='uppercase font-bold '>
          <NavLink className="" to='/'>
           <MdOutlineKeyboardArrowLeft className='inline-block '/>
 back
          </NavLink>
        </div>

        <div className='grid grid-cols-1 gap-4 '>

          <h1 className='uppercase font-extrabold text-3xl text-[#1d2549]'>Request for Services
</h1>

<div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>


<div className='grid grid-cols-1 text-[#1d2549]'>
  <label htmlFor="" className='font-medium'>Full name</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Last name</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Email</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Organization </label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Region</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>Industry</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>

<div className='grid grid-cols-1'>
  <label htmlFor="" className='font-medium'>How we can help you ?</label>
  <input type="text"  className='h-10  border-b-2 outline-none bg-transparent border-[#1d2549]'/>

</div>



</div>

        </div>

        <div className='h-12 bg-[#1d2549] md:w-56  rounded-3xl grid place-content-center text-white text-xl'>
  <button type="text"  className='h-full font-medium  outline-none bg-[#1d2549]'/> SUBMIT <button/>

</div>

      </div>

      <div className='w-auto h-screen lg:flex hidden' style={{ backgroundImage: `url(${Img26})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      </div>


    </section>

  );
};

export default Contact_us;
