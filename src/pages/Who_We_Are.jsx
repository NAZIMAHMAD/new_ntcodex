import React from 'react'
import MainLayout from '../layout/MainLayout'
import Hero from '../components/Hero'
import img32 from '../assets/Images/img32.jpg';
import { NavLink } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import img33 from '../assets/Images/img33.jpg'
import img34 from '../assets/Images/img34.jpg'




const Who_Am_I = () => {
  return (
    <>
      <MainLayout>

        <Hero h1="what we are"
          p="About us"
          style="bg-[#1d2549]" />


        <section className='lg:px-28 px-3 bg-[#1d2549] pb-12 '>

          <div className='container mx-auto text-white lg:px-20 px-0 text-lg grid grid-cols-1 gap-10'>

            <p>Tata Consultancy Services (TCS) (BSE: 532540, NSE: TCS) is a digital transformation and technology partner of choice for industry-leading organizations worldwide. Since its inception in 1968, TCS has upheld the highest standards of innovation, engineering excellence and customer service.</p>

            <p>Rooted in the heritage of the Tata Group, TCS is focused on creating long term value for its clients, its investors, its employees, and the community at large. With a highly skilled workforce of over 607,000 consultants in 55 countries and 180 service delivery centres across the world, the company has been recognized as a top employer in six continents. With the ability to rapidly apply and scale new technologies, the company has built long term partnerships with its clients – helping them emerge as perpetually adaptive enterprises. Many of these relationships have endured into decades and navigated every technology cycle, from mainframes in the 1970s to Artificial Intelligence today.</p>

            <p>TCS sponsors 15 of the world’s most prestigious marathons and endurance events, including TCS New York City Marathon, TCS London Marathon and TCS Sydney Marathon with a focus on promoting health, sustainability, and community empowerment. TCS generated consolidated revenues of US $29 billion in the fiscal year ended March 31, 2024.</p>

          </div>

        </section>


        <section className='lg:h-[50rem] h-auto py-28 lg:py-12 lg:px-28 px-3 grid  items-center relative  ' style={{ backgroundImage: `url(${img32})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

          <div className='bg-black opacity-50 absolute top-0 left-0 h-full w-full'>


          </div>

          <div className='container mx-auto lg:px-12  z-[1] ps-10   gap-6 lg:pe-[25rem]  text-white grid  grid-cols-1   border-[#bdf347]  border-l-4'>



            <p className='text-xl font-bold text-[#bdf347]'>OUR PEOPLE
            </p>
            <h1 className='lg:text-5xl font-bold text-3xl lg:leading-[1.2]'>
              How do you create a remarkable change?</h1>
            <p className='text-lg'>At TCS, we believe exceptional work begins with hiring, celebrating and nurturing the best people — from all walks of life.
            </p>

            <NavLink className="text-xl">Let's talk <MdArrowOutward className='inline-block text-4xl  bg-white text-black rounded-full' />
            </NavLink>

          </div>


        </section>


        <section className='px-3 lg:px-28 h-auto bg-[#1d2549] py-16'>

<div className='container mx-auto grid lg:grid-cols-2  grid-cols-1 gap-16 items-center'>

<div className=' text-white grid grid-cols-1 gap-4 text-center'>

<p className=' font-bold text-3xl'>10+</p>
<p className='text-2xl font-bold uppercase text-[#bdf347]'>Our employees</p>
<h1 className='text-lg'>workforce globally distributed highly localized</h1>


</div>

<div className=' text-white grid grid-cols-1 gap-4 text-center'>

<p className=' font-bold text-3xl'>35.2%</p>
<p className='text-2xl font-bold uppercase text-[#bdf347]'>Diversity</p>
<h1 className='text-lg'>workforce globally distributed highly localized</h1>


</div>

<div className=' text-white grid grid-cols-1 gap-4 text-center'>

<p className=' font-bold text-3xl'>2+</p>
<p className='text-2xl font-bold uppercase text-[#bdf347]'>Location</p>
<h1 className='text-lg'>workforce globally distributed highly localized</h1>


</div>


<div className=' text-white grid grid-cols-1 gap-4 text-center'>

<p className=' font-bold text-3xl'>5.2%</p>
<p className='text-2xl font-bold uppercase text-[#bdf347]'>Development</p>
<h1 className='text-lg'>workforce globally distributed highly localized</h1>


</div>


</div>


        </section>


<section className='px-3 lg:px-28 h-auto bg-[#1d2549] py-12 lg:py-16'>

<div className='container  mx-auto grid grid-cols-1 gap-16'>


<div className='grid grid-cols-1 gap-4 ps-10 border-l-4 border-[#bdf347]'>
<p className='text-xl font-bold text-[#bdf347]'>Timeline

            </p>
            <h1 className='lg:text-5xl text-white font-bold text-3xl lg:leading-[1.2]'>
              Our history
</h1>
            <p className='text-7xl font-extrabold lg:pt-16 pt-6 text-white'>2024
            </p>
</div>

<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 lg:gap-6'>

<div className='grid grid-cols-1 gap-4'>
<div>
<img src={img33} alt="" />
</div>

<div className='text-white'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet, repellat, est quod explicabo iusto unde iure, adipisci maiores voluptatem iste illum qui? Quos ex laborum ut, voluptate dolores consectetur?</p>
</div>
</div>

<div className='grid grid-cols-1 gap-4'>
<div>
<img src={img33} alt="" />
</div>

<div className='text-white'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet, repellat, est quod explicabo iusto unde iure, adipisci maiores voluptatem iste illum qui? Quos ex laborum ut, voluptate dolores consectetur?</p>
</div>
</div>

<div className='grid grid-cols-1 gap-4'>
<div>
<img src={img33} alt="" />
</div>

<div className='text-white'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet, repellat, est quod explicabo iusto unde iure, adipisci maiores voluptatem iste illum qui? Quos ex laborum ut, voluptate dolores consectetur?</p>
</div>
</div>

<div className='grid grid-cols-1 gap-4'>
<div>
<img src={img33} alt="" />
</div>

<div className='text-white'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet, repellat, est quod explicabo iusto unde iure, adipisci maiores voluptatem iste illum qui? Quos ex laborum ut, voluptate dolores consectetur?</p>
</div>
</div>

</div>


</div>

</section>

<section className='px-3 lg:px-28 h-auto bg-[#1d2549] py-12 lg:py-16'>

  <div className='mx-auto container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>

<div className='h-80 lg:h-auto '>
<img src={img34} alt="" className='h-full w-full object-cover'/>
</div>

<div className='text-white grid grid-cols-1 gap-6 '>
<p className='text-3xl font-semibold uppercase'>Investors
</p>
<h3 className='text-4xl font-bold text-[#bdf347]'>Positioned for long-term sustainable growth
</h3>
<p className='text-lg '>TCS is seen as a benchmark in its outreach to investors, in its transparency and disclosures, publicly communicating its strategy, risks and opportunities, reducing information asymmetries and enabling fair valuation of the stock.
</p>
<button className=' w-60 h-16 border text-xl font-bold'>
Read More
</button>

</div>

  </div>
</section>


      </MainLayout>





    </>
  )
}

export default Who_Am_I
