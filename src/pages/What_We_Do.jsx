import React from 'react'
import MainLayout from '../layout/MainLayout'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import Img27 from '../assets/Images/img27.jpg'
import Services from '../components/Services';


const What_We_Do = () => {
  return (
    <>
    <MainLayout>
    

<section className=' px-3 lg:px-28 bg-[#1d2549] py-12'>

<div className=' text-white mx-auto container grid grid-cols-1 gap-y-7 '>

<h1 className='lg:text-2xl text-xl uppercase'>what we do</h1>
<p className='lg:text-6xl text-3xl font-bold'>
Let's talk for what we do
</p>

<NavLink className="text-xl">Let's talk <MdArrowOutward className='inline-block text-4xl  bg-white text-black rounded-full'/>
 </NavLink>

</div>


</section>

<section className=' bg-[#1d2549] py-12'>

<div className=' mx-auto grid md:grid-cols-2 grid-cols-1 gap-7'> 

<div className=' grid grid-cols-1 lg:p-28 md:p-14  px-3  gap-4'>

<h2 className='lg:text-4xl text-3xl font-bold text-[#bdf347]'>
Belief Powers Business
</h2>
<p className='lg:text-xl  text-white'>
At TCS, we go beyond helping businesses transform through technology. We help them make a meaningful difference; to their customers, and to the communities they serve.
</p>

</div>


<div className='w-full 2xl:h-[30rem]'>

<img src={Img27} alt="" className='object-cover h-96 2xl:h-full w-full'/>

</div>


</div>


</section>

<Services heading="Select your industry. Discover our impact." 
bg="bg-[#1d2549]"

/>

    </MainLayout>
    </>
  )
}

export default What_We_Do
