import React from 'react'
import MainLayout from '../layout/MainLayout'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import Img27 from '../assets/Images/img27.jpg'
import Services from '../components/Services';
import Technology from '../components/Technology';
import img4 from '../assets/Images/img28.jpg'
import img5 from '../assets/Images/img29.jpg'
import img6 from '../assets/Images/img30.jpg'
import img7 from '../assets/Images/img31.jpg'
import Hero from '../components/Hero';


const What_We_Do = () => {
  return (
    <>
    <MainLayout>
    

<Hero 
h1="what we do"
p="lets connect , what we do"
style="bg-[#1d2549]"
>

<NavLink className="text-xl">Let's talk <MdArrowOutward className='inline-block text-4xl  bg-white text-black rounded-full'/>
 </NavLink>

</Hero>


<section className=' bg-[#1d2549] py-12'>

<div className=' mx-auto grid md:grid-cols-2 grid-cols-1 gap-7'> 

<div className=' grid grid-cols-1 lg:p-28 md:p-14  px-3   gap-4'>

<h2 className='text-4xl font-bold text-[#bdf347]'>
Belief Powers Business
</h2>

<p className='text-xl  text-white'>
At TCS, we go beyond helping businesses transform through technology. We help them make a meaningful difference; to their customers, and to the communities they serve.
</p>

</div>


<div className='w-full h-[30rem]'>

<img src={Img27} alt="" className='object-cover  h-full w-full'/>

</div>


</div>


</section>

<Services heading="Select your industry. Discover our impact." 
bg="bg-[#1d2549]"
/>

<Technology

title1="Always ahead with advanced technology services
"
  img1={img4}
       img2={img5}
        img3={img6}
         img4={img7}
           title2="Artificial intellegance"
      title3="website development"
      title4="App development"
      title5="social media marketing"
      style="bg-[#1d2549]"

/>



    </MainLayout>
    </>
  )
}

export default What_We_Do
