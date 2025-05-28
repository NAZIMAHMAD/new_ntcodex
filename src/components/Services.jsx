import React from 'react'
import img8 from '../assets/Images/img8.png'
import img9 from '../assets/Images/img9.png'
import img10 from '../assets/Images/img10.png'
import img11 from '../assets/Images/img11.png'
import img12 from '../assets/Images/img12.png'
import img13 from '../assets/Images/img13.png'
import img14 from '../assets/Images/img14.png'
import img15 from '../assets/Images/img15.png'
import img16 from '../assets/Images/img16.png'
import img17 from '../assets/Images/img17.png'

const Services = ({heading, bg}) => {


    return (
    <>
    
          <section className={`w-full lg:px-28 px-3 h-auto py-12 ${bg}`}>
    
    
            <div className='container  mx-auto  grid grid-cols-1 gap-12'>
    
              <div className='md:w-[70%] w-full lg:pl-8 md:text-start text-center '>
                <h4 className=' text-[#bdf347] md:text-4xl text-3xl  font-bold'>{heading}</h4>
              </div>
    
              <div className=' grid grid-cols-2 gap-8 '>
    
                <div className=' text-white gap-y-5 flex md:flex-row flex-col justify-start  items-center'>
    
                  <div className='md:w-[20%] w-[50%]   '>
                    <img src={img8} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto   text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>banking</p>
                  </div>
    
                </div>
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img9} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Retail</p>
                  </div>
    
                </div>
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img10} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Communications, Media, and Information Services</p>
                  </div>
    
                </div>
    
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img11} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Travel & logistices</p>
                  </div>
    
                </div>
    
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img12} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Education</p>
                  </div>
    
                </div>
    
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img13} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Public services</p>
                  </div>
    
                </div>
    
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img14} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Healthcare</p>
                  </div>
    
                </div>
    
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img15} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>High tech</p>
                  </div>
    
                </div>
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img16} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Insurance
                    </p>
                  </div>
    
                </div>
    
                <div className=' text-white gap-y-5  flex md:flex-row flex-col  items-center'>
    
                  <div className='md:w-[20%] w-[50%] '>
                    <img src={img17} alt="" className='w-[3rem] h-[3rem] mx-auto' />
                  </div>
    
                  <div className='md:w-[80%] w-auto text-center md:text-start'>
                    <p className='md:text-2xl text-md capitalize font-semibold'>Consumer and good distribution</p>
                  </div>
    
                </div>
    
    
              </div>
    
            </div>
    
          </section>
      
    </>
  )
}

export default Services
