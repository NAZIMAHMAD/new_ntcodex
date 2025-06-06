import React from 'react'
import MainLayout from '../layout/MainLayout'
import Hero from '../components/Hero'
import Technology from '../components/Technology'
import img4 from '../assets/Images/img28.jpg'
import img5 from '../assets/Images/img29.jpg'
import img6 from '../assets/Images/img30.jpg'
import img7 from '../assets/Images/img31.jpg'
import img35 from '../assets/Images/img35.jpg'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";


const Insight = () => {
  return (
    <>
      <MainLayout>

        <Hero

          p="Insight"
          h1="Stay in the know
"
          style="bg-[#1d2549]"


        >

          <p className='text-xl'>
            We believe the exchange of knowledge fuels collective growth


          </p>


        </Hero>


        <Technology

          title1="Insights by interest
"
          title2="Artificial intellegance"
          title3="website development"
          title4="App development"
          title5="social media marketing"
          img1={img5}
          img2={img4}
          img3={img6}
          img4={img7}
          style="bg-[#1d2549]"

        />



<section className=' bg-[#1d2549] lg:py-12 py-6'>

<div className=' grid grid-cols-1 md:grid-cols-2  gap-8'>

<div className=' text-white flex flex-col  gap-6 lg:p-28 md:p-16 px-3'>
<h1 className='text-4xl  font-bold'>Explore our insights
</h1>
<p className='text-xl'>The great reimagination of work is happening. Now.
</p>
<NavLink className='border w-60 h-16 font-bold grid items-center justify-center text-xl rounded-full'>
  Read More
</NavLink>

</div>

<div className=' lg:h-auto h-[25rem]'>
<img src={img35} alt="" className='h-full w-full'/>
</div>

</div>

</section>


<section className='lg:px-28 px-3 py-12 bg-[#1d2549]'>

<div className='container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10  lg:gap-4 text-white'>

  <div className='grid grid-cols-1 gap-4 lg:text-start text-center'>
    <h5 className='text-4xl font-bold'>Transformation starts here
</h5>
<p className='text-xl'>Reimagine your future.
</p>

<div className=' w-60 h-16 flex gap-4 lg:mx-0 mx-auto items-center border justify-center rounded-full'>
<NavLink className='  text-xl font-bold  rounded-full'>
Read More 
</NavLink> <MdArrowOutward className=' text-3xl text-white rounded-full' />
</div>

  </div>

  <div className='grid grid-cols-1 gap-4  lg:ps-10 ps-0 lg:border-l-2 lg:text-start text-center'>
<p className='text-4xl font-bold'>Find out more
</p>
<div className=' w-44 h-10 flex gap-4 mx-auto lg:mx-0 items-center border justify-center rounded-full'>
<NavLink className='  text-xl font-bold  rounded-full'>
Read More 
</NavLink> <MdArrowOutward className=' text-3xl  text-white rounded-full' />
</div>

  </div>

</div>

</section>

      </MainLayout>
    </>
  )
}

export default Insight
