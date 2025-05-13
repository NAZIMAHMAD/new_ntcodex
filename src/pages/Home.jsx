import React from 'react'
import MainLayout from '../layout/MainLayout'
import { GoArrowDownRight } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from '../assets/Images/img1.png'
import img2 from '../assets/Images/img2.png'
import img3 from '../assets/Images/img3.png'
import { NavLink } from 'react-router-dom';







const Home = () => {
  return (

    <MainLayout>


      {/* HERO SECTION -SECTION 1. */}

      <section className='bg-black h-auto  px-3 md:px-28 lg:py-20 py-12 w-full flex items-center' style={{background:'#1d2549'}}>

        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2  gap-8 items-center'>

          <div className=' text-white flex justify-start gap-5 flex-col text-center lg:text-start'>
            <h1 className='lg:text-5xl text-4xl  lg:leading-tight leading-tight font-bold '>Crafting Innovation, <span style={{color:'#bdf347'}}>Code by Code</span>, Delivered with Precision.
            </h1>
            <p className='text-xl'>Your business is our proterites and we serve the quality , your business is our proterites and we serve the quality</p>
            
            <button className='md:w-60 border-none rounded-full  h-auto lg:block hidden p-3 border font-bold capitalize text-xl mt-4' style={{background:'#bdf347', color:'#1d2549'}}>
              Get in touch <GoArrowDownRight className='inline-block font-bold text-3xl'/>


            </button>
          </div>

          <div className='border-[#7d7c7c] border  hidden lg:flex flex-col gap-6 rounded-xl text-white capitalize py-6 px-14'>
            <p className='text-3xl font-bold capitalize' style={{color:"#bdf347"}}>enquiry now <AiOutlineMessage className='inline-block font-bold text-3xl'/>
</p>
            <div className=' '>
              <input type="text" className='h-11 w-full rounded-full px-3' placeholder='Full Name' />
            </div>
            <div className=''>
              <input type="text" className='h-11 w-full rounded-full px-3' placeholder='Email' />
            </div>
            <div className=''>
              <textarea name="" id="" cols="100" rows="3" className='w-full rounded-md p-3' placeholder='What can i help you'></textarea>
            </div>
            <div className='border w-full h-11 flex justify-center rounded-full items-center'>
              <button className=' text-xl capitalize rounded-full' style={{color:'#bdf347'}}>Get back to you </button>
            </div>

          </div>

          <div className='lg:hidden md:w-60 block mx-auto w-full rounded-full' style={{background:'#bdf347', color:'#1d2549'}}>
             <button className='w-full  rounded-full h-auto text-white  p-3 border font-bold capitalize text-xl ' style={{background:'#bdf347', color:'#1d2549'}}>
              Get in touch<GoArrowDownRight className='inline-block font-bold text-3xl'/>
            </button>
          </div>

        </div>
      </section>


{/* SECTION 2.  */}

<section className='w-full h-auto py-12 bg-[#1d2549] lg:px-28 px-3 '>

<div className='container mx-auto h-auto grid grid-cols-1 gap-10 '>

<div className='grid grid-cols-2 items-center'>

<div>
<h2 className='text-[#bdf347] md:text-4xl text-3xl  font-bold'>Transforming businesses</h2>
</div>

<div className='flex gap-3  justify-end text-[#bdf347] text-4xl'>
<MdKeyboardArrowLeft />
<MdOutlineKeyboardArrowRight />


</div>

</div>

<div className='grid lg:grid-cols-3 grid-cols-1 md:gap-6 gap-8'>

<div className='border-[#828181] border h-auto p-2 rounded'>

<div className=' lg:h-[18rem] md:h-[25rem] h-[15rem] object-cover'>
<img src={img1} alt="" className='h-full w-full object-cover'/>

</div>

<div className='mt-4 h-auto'>
<p className='text-[#c5c6c5] text-md'>Nationwide - TCS Partnership: Reimagining the Future of Banking	https://www.tcs.com/what-we-do/industries/banking/case-study/nationwide-reimagining-future-of-banking
</p>
<NavLink to="" className="text-[#bdf347] inline-block mt-6 font-bold">
Read More <GoArrowDownRight className='inline-block font-bold text-3xl'/>
</NavLink>

</div>

</div>

<div className='border-[#828181] border h-auto p-2 rounded'>

<div className=' lg:h-[18rem] md:h-[25rem] h-[15rem] object-cover'>
<img src={img2} alt="" className='h-full w-full object-cover'/>

</div>

<div className='mt-4 h-auto'>
<p className='text-[#c5c6c5] text-md'>Nationwide - TCS Partnership: Reimagining the Future of Banking	https://www.tcs.com/what-we-do/industries/banking/case-study/nationwide-reimagining-future-of-banking
</p>
<NavLink to="" className="text-[#bdf347] inline-block mt-6 font-bold">
Read More <GoArrowDownRight className='inline-block font-bold text-3xl'/>
</NavLink>

</div>

</div>

<div className='border-[#828181] border h-auto p-2 rounded'>

<div className=' lg:h-[18rem] md:h-[25rem] h-[15rem] object-cover'>
<img src={img3} alt="" className='h-full w-full object-cover'/>

</div>

<div className='mt-4 h-auto'>
<p className='text-[#c5c6c5] text-md'>Nationwide - TCS Partnership: Reimagining the Future of Banking	https://www.tcs.com/what-we-do/industries/banking/case-study/nationwide-reimagining-future-of-banking
</p>
<NavLink to="" className="text-[#bdf347] inline-block mt-6 font-bold">
Read More <GoArrowDownRight className='inline-block font-bold text-3xl'/>
</NavLink>

</div>

</div>


</div>



</div>



</section>


    </MainLayout>


  )
}

export default Home
