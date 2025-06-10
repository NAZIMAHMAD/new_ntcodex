import React from 'react'
import MainLayout from '../layout/MainLayout'
import Hero from '../components/Hero'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import img36 from '../assets/Images/img36.jpg'
import img37 from '../assets/Images/img37.jpg'
import img38 from '../assets/Images/img38.jpg'
import img39 from '../assets/Images/img39.jpg'




const Careers = () => {
  return (
    <>

    <MainLayout>
      
     <Hero 
     
       p="Build a future you believe in
"
          h1="Careers
"
          style="bg-[#1d2549]"
     >

     <NavLink className="text-xl">Let's talk <MdArrowOutward className='inline-block text-4xl  bg-white text-black rounded-full'/>
 </NavLink> 

</Hero>


<section className=' bg-[#1d2549] md:py-12 py-10 px-3 lg:px-28'>

<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center  gap-8'>

<div className=' text-white flex flex-col  gap-6'>

<p className='text-xl font-semibold'>Join us
</p>

<h1 className='text-4xl  font-bold'>Shape the future of technology

</h1>
<p className='text-xl'>As a global company with unparalleled scale, a track record of pioneering innovation, and a huge and influential client base, we offer associates a chance to drive change and improve the lives of millions of people around the world.

</p>


</div>

<div className=' lg:h-[25rem] h-[25rem]'>
<img src={img36} alt="" className='h-full w-full object-cover'/>
</div>

</div>

</section>


<section className=' bg-[#1d2549] md:py-12 py-10 px-3 lg:px-28'>

<div className='container flex-col-reverse flex mx-auto md:grid grid-cols-1 md:grid-cols-2 items-center  gap-8'>

<div className=' lg:h-[25rem] h-[25rem]'>
<img src={img37} alt="" className='h-full w-full object-cover'/>
</div>


<div className=' text-white flex flex-col  gap-6'>

<h1 className='text-4xl  font-bold'>Leading with purpose
</h1>
<p className='text-xl'>Through the application of innovation and our contextual knowledge, we give associates the opportunity to deliver transformative outcomes that benefit society at large and prove that anything is possible.


</p>


</div>



</div>

</section>

 <section className='lg:h-[40rem] h-auto py-28 lg:py-12 lg:px-28 px-3 grid  items-center relative  ' style={{ backgroundImage: `url(${img38})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

          <div className='bg-black opacity-50 absolute top-0 left-0 h-full w-full'>


          </div>

          <div className='container mx-auto lg:px-12  z-[1] ps-10   gap-6 lg:pe-[25rem]  text-white grid  grid-cols-1   border-[#bdf347]  border-l-4'>



            <p className='text-xl font-bold text-[#bdf347]'>A belief in diversity

            </p>
            <h1 className='lg:text-5xl font-bold text-3xl lg:leading-[1.2]'>
              How do you create remarkable change? By hiring, celebrating and nurturing the best people-from all walks of life.
</h1>
           


          </div>


        </section>

<section className=' bg-[#1d2549] md:py-16 py-10 px-3 lg:px-28 '>

<div className='flex-col-reverse flex container mx-auto md:grid grid-cols-1 md:grid-cols-2 items-center   gap-8'>

<div className=' lg:h-[25rem] h-[25rem]'>
<img src={img39} alt="" className='h-full w-full object-cover'/>
</div>


<div className=' text-white flex flex-col  gap-6'>

<h1 className='text-4xl  font-bold'>Greater futures through innovation

</h1>
<p className='text-xl'>Watching the world of next-tech unfold? It's time to be part of it. Explore challenging and exciting opportunities across the globe.

</p>
<NavLink className="text-xl">Search open roles <MdArrowOutward className='inline-block text-4xl  bg-white text-black rounded-full'/>
 </NavLink>


</div>



</div>

</section>

    </MainLayout>

    </>
  )
}

export default Careers
