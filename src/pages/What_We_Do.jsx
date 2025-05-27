import React from 'react'
import MainLayout from '../layout/MainLayout'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import Img27 from '../assets/Images/img27.jpg'


const What_We_Do = () => {
  return (
    <>
    <MainLayout>
    

<section className=' px-3 lg:px-28 bg-[#1d2549] py-12'>

<div className=' text-white mx-auto container grid grid-cols-1 gap-y-7 '>

<h1 className='text-2xl uppercase'>what we do</h1>
<p className='text-6xl font-bold'>
Let's talk for what we do
</p>

<NavLink className="text-xl">Let's talk <MdArrowOutward className='inline-block text-4xl  bg-white text-black rounded-full'/>
 </NavLink>

</div>


</section>

<section className=' bg-[#1d2549] py-12'>

<div className=' mx-auto grid grid-cols-2'> 

<div className='border grid grid-cols-1 '>

<h2 className='text-4xl text-white font-bold'>
Belief Powers Business
</h2>
<p className='text-[18px] text-white'>
At TCS, we go beyond helping businesses transform through technology. We help them make a meaningful difference; to their customers, and to the communities they serve.
</p>

</div>


<div>

<img src={Img27} alt="" />

</div>


</div>


</section>


    </MainLayout>
    </>
  )
}

export default What_We_Do
