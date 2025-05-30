import React from 'react'
import MainLayout from '../layout/MainLayout'
import { AiOutlineMessage } from "react-icons/ai";
import { GoArrowDownRight } from "react-icons/go";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from '../assets/Images/img1.png'
import img2 from '../assets/Images/img2.png'
import img3 from '../assets/Images/img3.png'
import img4 from '../assets/Images/img4.png'
import img5 from '../assets/Images/img5.png'
import img6 from '../assets/Images/img6.png'
import img7 from '../assets/Images/img7.png'
import img8 from '../assets/Images/img8.png'
import img9 from '../assets/Images/img9.png'
import img18 from '../assets/Images/img18.png'
import img19 from '../assets/Images/img19.png'
import img20 from '../assets/Images/img20.png'
import img21 from '../assets/Images/img21.png'
import img22 from '../assets/Images/img22.png'
import img23 from '../assets/Images/img23.png'
import img24 from '../assets/Images/img24.png'
import img25 from '../assets/Images/img25.png'
import { NavLink } from 'react-router-dom';
import TawkToChat from '../components/TawkToChat';
import Services from '../components/Services';
import Technology from '../components/Technology';







const Home = () => {
  return (

    <MainLayout>

            <TawkToChat />

      {/* HERO SECTION -SECTION 1. */}

      <section className=' h-auto  px-3 md:px-28  py-12 relative   pt-20 w-full flex items-center bg-gradient-to-r from-[#1d2549] via-[#365200] to-[#1d2549]' >

        <div className='container  mx-auto grid grid-cols-1 text-center lg:justify-center lg:w-[60%] xl:w-[50%] gap-8 items-center'>

          <div className=' text-white flex items-center justify-center gap-5 flex-col text-center lg:text-center'>
            <h1 className='lg:text-5xl text-4xl  lg:leading-tight leading-tight font-bold '>Crafting Innovation, <span style={{ color: '#bdf347' }}>Code by Code</span>, Delivered with Precision.
            </h1>
            <p className='text-xl'>Your business is our proterites and we serve the quality , your business is our proterites and we serve the quality</p>

            <button className='md:w-60 w-60 transition-all hover:scale-90  hover:bg-gradient-to-r from-white to-[#bdf347] bg-[#bdf347] text-[#1d2549]  border-none rounded-full  h-auto lg:block hidden p-3 border font-bold capitalize text-xl mt-4' >
              Get in touch <GoArrowDownRight className='inline-block font-bold text-3xl' />
            </button>

          </div>

          <div className='border-[#7d7c7c] border  hidden flex-col gap-6 rounded-xl text-black capitalize py-6 px-14'>
            <p className='text-3xl font-bold capitalize' style={{ color: "#bdf347" }}>enquiry now <AiOutlineMessage className='inline-block font-bold text-3xl' />
            </p>
            <div className=' '>
              <input type="text" className='h-11 w-full rounded-full px-3' placeholder='Full Name' />
            </div>
            <div className=''>
              <input type="text" className='h-11 w-full rounded-full px-3' placeholder='ntcodexsystems@gmail.com' />
            </div>
            <div className=''>
              <input type="tel" className='h-11 w-full rounded-full px-3' placeholder='+91-123-456-7890' />
            </div>
            <div className=''>
              <textarea name="" id="" cols="100" rows="3" className='w-full rounded-md p-3' placeholder='What can i help you'></textarea>
            </div>
            <div className='border w-full h-11 flex  justify-center rounded-full items-center'>
              <button className=' text-xl  capitalize rounded-full' style={{ color: '#bdf347' }}>Get back to you </button>
            </div>

          </div>

          <div className='lg:hidden  md:w-60 block mx-auto w-64 rounded-full' style={{ background: '#bdf347', color: '#1d2549' }}>
            <button className='w-full border-none  rounded-full h-auto text-white  p-3 border font-bold capitalize text-xl ' style={{ background: '#bdf347', color: '#1d2549' }}>
              Get in touch<GoArrowDownRight className='inline-block font-bold text-3xl' />
            </button>
          </div>

        </div>
      </section>


      {/* SECTION 2.  */}

      <section className='w-full h-auto py-12 bg-gradient-to-r from-[#1d2549] via-[#365200] to-[#1d2549] lg:px-28 px-3 '>

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

            <div className='border-[#828181] border h-auto p-2 rounded-3xl'>

              <div className=' lg:h-[18rem] md:h-[25rem] h-[15rem] object-cover rounded-3xl'>
                <img src={img1} alt="" className='h-full w-full object-cover rounded-3xl' />

              </div>

              <div className='mt-4 h-auto'>
                <p className='text-white text-md'>Nationwide - TCS Partnership: Reimagining the Future of Banking	https://www.tcs.com/what-we-do/industries/banking/case-study/nationwide-reimagining-future-of-banking
                </p>
                <NavLink to="" className="text-[#bdf347] inline-block mt-6 font-bold">
                  Read More <GoArrowDownRight className='inline-block font-bold text-3xl' />
                </NavLink>

              </div>

            </div>

            <div className='border-[#828181] border h-auto p-2  rounded-3xl'>

              <div className=' lg:h-[18rem] md:h-[25rem] h-[15rem] object-cover rounded-3xl'>
                <img src={img2} alt="" className='h-full w-full object-cover rounded-3xl' />

              </div>

              <div className='mt-4 h-auto'>
                <p className='text-white text-md'>Nationwide - TCS Partnership: Reimagining the Future of Banking	https://www.tcs.com/what-we-do/industries/banking/case-study/nationwide-reimagining-future-of-banking
                </p>
                <NavLink to="" className="text-[#bdf347] inline-block mt-6 font-bold">
                  Read More <GoArrowDownRight className='inline-block font-bold text-3xl' />
                </NavLink>

              </div>

            </div>

            <div className='border-[#828181] border h-auto p-2 rounded-3xl'>

              <div className=' lg:h-[18rem] md:h-[25rem] h-[15rem] object-cover rounded-3xl'>
                <img src={img3} alt="" className='h-full w-full object-cover rounded-3xl' />

              </div>

              <div className='mt-4 h-auto'>
                <p className='text-white text-md'>Nationwide - TCS Partnership: Reimagining the Future of Banking	https://www.tcs.com/what-we-do/industries/banking/case-study/nationwide-reimagining-future-of-banking
                </p>
                <NavLink to="" className="text-[#bdf347] inline-block mt-6 font-bold">
                  Read More <GoArrowDownRight className='inline-block font-bold text-3xl' />
                </NavLink>

              </div>

            </div>


          </div>



        </div>



      </section>


      {/* SECTION 3.  */}

      <Technology 

      heading="Services"
      title1="Transform your business with advanced technologies"
      title2="Artificial intellegance"
      title3="website development"
      title4="App development"
      title5="social media marketing"
      img1={img4}
       img2={img5}
        img3={img6}
         img4={img7}
         style="bg-gradient-to-r from-[#1d2549] via-[#365200] to-[#1d2549]"
      />

     



      {/* SECTION 4. */}


    <Services 
    
    heading="Select your industry. Discover our impact."
bg="bg-gradient-to-r from-[#1d2549] via-[#365200] to-[#1d2549]
"

    />

      {/* SECTION 5.  */}

      <section className='w-full h-auto py-12 bg-gradient-to-r from-[#1d2549] via-[#365200] to-[#1d2549] lg:px-28 px-3 '>

        <div className='container mx-auto h-auto grid grid-cols-1 gap-10 '>

          <div className='grid md:grid-cols-2 grid-cols-1  items-center'>

            <div>
              <h2 className='text-[#bdf347]  md:text-4xl text-3xl  font-bold'>Spotlight on NTCODEX SYSTEMS</h2>
            </div>

            <div className=' gap-3 hidden md:flex text-center justify-end text-white text-xl capitalize'>
              <button className='capitalize'>
                view more
              </button>

            </div>

          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8'>

            <div className='border-[#828181] border rounded-3xl h-auto p-2 text-center relative top-0'>


              <div className=' md:h-[30rem] h-[23rem] rounded-3xl'>


                <img src={img18} alt="" className='cursor-pointer rounded-md h-full w-full object-cover' />

              </div>



            </div>

            <div className='border-[#828181]   rounded-3xl border h-auto p-2 text-center relative top-0'>

              <div className='  md:h-[30rem] h-[23rem] '>


                <img src={img19} alt="" className='h-full w-full object-cover rounded-3xl' />

              </div>


            </div>

            <div className='border-[#828181] rounded-3xl  border h-auto p-2 text-center relative top-0'>


              <div className='  md:h-[30rem] h-[23rem] '>


                <img src={img20} alt="" className='h-full w-full object-cover rounded-3xl' />

              </div>


            </div>





          </div>



        </div>



      </section>



      {/* SECTION 6. */}

    <section className='py-12 px-3 lg:px-28 bg-[#bdf347]'>
  <div className='container mx-auto '>
    <div className='flex justify-center items-center text-center gap-y-4 flex-col'>
      <h5 className='text-[#1d2549]  md:text-6xl text-3xl  font-bold'>Join our team</h5>
      <p className='text-lg font-bold'>Realize your potential.</p>
      <NavLink to="/your-requirement" className='w-[16rem] border-none  rounded-full h-auto text-white  p-3 border font-bold capitalize text-xl bg-[#1d2549]'>
        Your Requirement
      </NavLink>
    </div>
  </div>
</section>


      {/* SECTION 7. */}

<section className='py-12 px-3 lg:px-28 bg-[#bdf347]'>

  <div className='container mx-auto flex flex-col gap-10'>

<div className=''>

<p className='text-lg text-[#1d2549] font-bold'> Social</p>
<h6 className='text-[#1d2549]  md:text-4xl text-3xl  font-bold'>Follow us for the latest updates</h6>

</div>

<div className=' w-auto h-auto gap-x-10 grid grid-cols-5'>

<div className='grid md:grid-cols-2 grid-cols-1 items-center gap-x-4 '>
  
<div>
<img src={img21} alt="" />
</div>

<div className='lg:flex hidden'>
<p className='text-[#1d2549]  md:text-2xl text-xl  font-bold'>Facebook</p>
</div>

</div>

<div className='grid md:grid-cols-2 grid-cols-1 items-center gap-x-4  '>
  
<div >
<img src={img22} alt="" />
</div>

<div className='lg:flex hidden'>
<p className='text-[#1d2549]  md:text-2xl text-xl  font-bold'>LinkedIn</p>
</div>

</div>

<div className='grid md:grid-cols-2 grid-cols-1 items-center gap-x-4  '>
  
<div>
<img src={img23} alt="" />
</div>

<div className='lg:flex hidden'>
<p className='text-[#1d2549]  md:text-2xl text-xl  font-bold'>Instagram</p>
</div>

</div>

<div className='grid md:grid-cols-2 grid-cols-1 items-center gap-x-4 '>
  
<div>
<img src={img24} alt="" />
</div>

<div className='lg:flex hidden'>
<p className='text-[#1d2549]  md:text-2xl text-xl  font-bold'>Twitter</p>
</div>

</div>

<div className='grid md:grid-cols-2 grid-cols-1 items-center gap-x-4 '>
  
<div>
<img src={img25} alt="" />
</div>

<div className='lg:flex hidden'>
<p className='text-[#1d2549]  md:text-2xl text-xl  font-bold'>YouTube</p>
</div>

</div>

</div>


  </div>
   
</section>


   

        </MainLayout>


        )
}

        export default Home
