import React from 'react'
import { GoArrowDownRight } from "react-icons/go";


const Technology = ({heading, title1, title2, title3, title4, title5, img1, img2, img3, img4, style }) => {
    return (
        <>

            <section className={`w-full ${style} h-auto py-12  lg:px-28 px-3 `}>

                <div className='container mx-auto h-auto grid grid-cols-1 gap-16 '>

                    <div className='grid grid-cols-1 items-center'>

                        <div className='md:w-[70%] w-full mx-auto gap-4 flex justify-center flex-col text-center'>
                            <p className=' text-white md:text-2xl text-2xl  font-bold'>{heading}</p>

                            <h3 className=' text-[#bdf347] md:text-4xl text-3xl  font-bold'>{title1}</h3>
                        </div>

                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8'>

                        <div className='border-[#828181] border h-auto p-2  text-center relative top-0 transition-transform duration-500 hover:-translate-y-6 pointer'>

                            <div className='absolute top-0 left-0 w-full h-full opacity-40  bg-[#060703]'>

                            </div>

                            <div className=' lg:h-[20rem] md:h-[25rem] h-[23rem]'>


                                <img src={img1} alt="" className='cursor-pointer h-full w-full object-cover' />

                            </div>

                            <p className='absolute  lg:text-2xl md:text-2xl text-4xl  z-0 text-white font-extrabold capitalize left-[5%] mx-auto top-[45%]'>{title2}</p>

                        </div>

                        <div className='border-[#828181] border h-auto p-2 text-center relative top-0 transition-transform duration-500 hover:-translate-y-6 pointer'>

                            <div className='absolute top-0 left-0 w-full h-full opacity-40 z-0 bg-[#060703]'>

                            </div>
                            <div className=' lg:h-[20rem] md:h-[25rem] h-[23rem] '>


                                <img src={img2} alt="" className='h-full w-full object-cover' />

                            </div>

                            <p className='absolute lg:text-2xl md:text-2xl text-4xl  text-white font-extrabold capitalize left-[5%] text-center top-[45%]'>{title3}</p>

                        </div>

                        <div className='border-[#828181] border h-auto p-2 text-center relative top-0 transition-transform duration-500 hover:-translate-y-6   pointer'>

                            <div className='absolute top-0 left-0 w-full h-full opacity-40 z-0 bg-[#060703]'>

                            </div>
                            <div className=' lg:h-[20rem] md:h-[25rem] h-[23rem] '>


                                <img src={img3} alt="" className='h-full w-full object-cover ' />

                            </div>

                            <p className='absolute  lg:text-2xl md:text-2xl text-4xl  text-white font-extrabold capitalize left-[5%] mx-auto top-[45%]'>{title4}</p>

                        </div>

                        <div className='border-[#828181] border h-auto p-2 text-center relative top-0  htransition-transform duration-500 hover:-translate-y-6 pointer'>

                            <div className='absolute top-0 left-0 w-full h-full opacity-40 z-0 bg-[#060703]'>

                            </div>
                            <div className=' lg:h-[20rem] md:h-[25rem] h-[23rem] '>


                                <img src={img4} alt="" className='h-full w-full object-cover' />

                            </div>

                            <p className='absolute  lg:text-2xl md:text-2xl text-4xl  text-white font-extrabold capitalize left-[5%] mx-auto top-[45%]'>{title5}</p>

                        </div>

                    </div>

                    <div className=' hidden'>
                        <button className='md:w-60 w-60 mx-auto hover:text-[#1d2549] hover:border-none hover:bg-[#bdf347] hover:scale-90 transition-all  rounded-full  h-auto   p-3  font-bold capitalize text-xl mt-4 text-white border'>
                            view all topics <GoArrowDownRight className='inline-block font-bold text-3xl' />
                        </button>
                    </div>

                </div>

            </section>




        </>
    )
}

export default Technology
