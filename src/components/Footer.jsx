import React from 'react'
import logo from '../assets/Images/logo.jpg'
import chatbot from '../assets/Images/chatbot.png'
import zestgo from '../assets/Images/zestgo_logo.jpg'
import masjid360 from '../assets/Images/masjid360_logo.jpg'


const Footer = () => {
  return (
    <>
   {/* SECTION 8. */}

<footer className='bg-[#1d2549] px-3 lg:px-28 py-12'>

<div className='container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-10'>

<div>

  <ul className='text-[#b9b9bb] flex justify-start flex-col gap-2'>

    <li className='text-white'>INDUSTRY</li>
    <li className='pt-4'>Banking</li>
    <li>Travel and Logistics</li>
    <li>Retail</li>
    <li>Public Services</li>
    <li>healthcare</li>
        <li>High Tech</li>
    <li>Insurance</li>
    <li>Educations</li>
    <li>Communications, Media, and 
Information Services</li>
    <li>Consumer Packaged Goods and Distribution</li>

  </ul>
</div>

<div>

  <ul className='text-[#b9b9bb] flex justify-start flex-col gap-2'>

    <li className='text-white'>SERVICES</li>
    <li className='pt-4'>Artifical intellegance</li>
    <li>website Development </li>
    <li>Mobile App Development</li>
    <li>Social Marketing</li>
    <li>logo & social media banner design</li>
      

  </ul>
</div>




<div>

  <ul className='text-[#b9b9bb] flex justify-start flex-col gap-2 '>

    <li className='text-white'>INSIGHTS</li>
    <li className='pt-4'>customers story</li>
    <li>cyber sequrity</li>
    <li>future of work </li>
    <li>sustainability </li>
    <li>ntcodexsystems AI</li>
        <li>what we are</li>
    <li>what we offer</li>
    <li>careers</li>
    <li>contact us</li>

  </ul>
</div>

<div>

  <ul className='text-[#b9b9bb] flex justify-start flex-col gap-2'>

    <li className='text-white'>PRODUCTS & PLATFORM</li>
    <li className='pt-4'>zeStGo</li>
        <li className=''>NT MASJID360</li>

   

  </ul>
</div>




</div>



</footer>

      {/* SECTION 9. */}

<section className='bg-[#1d2549] px-3 lg:px-28 py-3 border-t-[1px] border-[#686869]'>

<div className='w-16 h-16 fixed bottom-[6rem] right-12 z-40 hidden'>
<img src={chatbot} alt="" className='w-full h-full'/>
</div>



<div className='container mx-auto gap-5  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 relative items-center'>

<div className='w-36 h-12 '>
<img src={logo} alt="" className='w-full h-full'/>
</div>

<div className='md:text-center text-center '>
<h6 className='text-[#bdf347] font-bold text-[12px] md:text-lg'>@ NTCODEX SYSTEMS PVT LTD</h6>
<p className='text-[#b9b9bb] text-[12px] md:text-lg'>Terms & Conditions | Security Policy</p>
</div>

<div className='w-auto h-auto grid grid-cols-1 justify-end items-end  gap-3'>
  <div className='flex h-12 lg:justify-end gap-5'>
<img src={zestgo} alt="" className='w-30 h-full'/>
<img src={masjid360} alt="" className='w-30 h-full'/>
  </div>

<p className='text-white lg:text-end text-sm font-semibold'>Powered by Ntcodex systems</p>

</div>

<div>



</div>


</div>


</section>
    </>
  )
}

export default Footer
