import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";



const Hero = ({h1, p, style, children}) => {
  return (
   
   <>
      
<section className={`px-3 lg:px-28  ${style} lg:py-12 py-8`}>

<div className=' text-white mx-auto container grid grid-cols-1 gap-y-7 '>

<h1 className='lg:text-2xl text-xl uppercase'>{h1}</h1>
<p className='lg:text-6xl text-3xl font-bold'>
{p}
</p>

{children}

</div>


</section>




    </>
  )
}

export default Hero
