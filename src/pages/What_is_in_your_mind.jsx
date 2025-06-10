import React from 'react'
import MainLayout from '../layout/MainLayout'
import { GrBusinessService } from "react-icons/gr";
import { SiMarketo } from "react-icons/si";
import { MdOutlineContactless } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";






const What_is_in_your_mind = () => {
  return (
    <>

<MainLayout>


<section className='bg-[#1d2549] px-3 lg:px-28'>

<div className='container mx-auto '>


<div className='grid md:grid-cols-2 py-12 gap-6'>

<div>
<h1 className='text-4xl font-bold text-[#bdf347]'>What’s on your mind?
</h1>
</div>

<div>
<p className='text-lg text-white'>We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
</p>
</div>

</div>

<div className='grid md:grid-cols-3 grid-cols-1 gap-7 py-12 pt-6'>

<div className='border p-5 grid grid-cols-1 place-items-center text-center rounded-lg gap-5'>

<GrBusinessService className='text-white text-center text-2xl'/>

<p className='text-[#bdf347] text-xl font-bold capitalize'>Request for services</p>

</div>


<div className='border p-5 grid grid-cols-1 place-items-center text-center rounded-lg gap-5'>

<SiMarketo className='text-white text-center text-2xl'/>


<p className='text-[#bdf347] text-xl font-bold capitalize'>Investor information</p>

</div>


<div className='border p-5 grid grid-cols-1 place-items-center text-center rounded-lg gap-5'>

<MdOutlineContactless  className='text-white text-center text-2xl'/>

<p className='text-[#bdf347] text-xl font-bold capitalize'>Media contacts</p>

</div>




</div>

<div className='grid md:grid-cols-1 py-12 gap-12'>

<div className='md:text-start text-center' >
    <h2 className='text-white text-2xl font-bold'>OUR GLOBAL PRESENCE <MdLocationCity className='inline-block'/>

</h2>
</div>

<div className='grid md:grid-cols-2 gap-6 capitalize'>

   <div className='md:text-start text-center'>
    <p className='text-white text-xl'>Hyderabad Telangana,</p>
<p className='text-white text-xl pt-4'> near mina hospital, Dattatreya Nagar, Asif Nagar, Hyderabad, Telangana 500028</p>
    </div>

    <div className='md:border-s-4 md:border-[#bdf347] md:px-8 px-0 border-0 md:text-start text-center'>
            <p className='text-white text-xl'>Darbhanga bihar,</p>

<p className='text-white text-xl pt-4'> Purani munsafi, Urdu Bazaar Road, Quilaghat, Rahamganj, Darbhanga, Bihar 846004</p>

    </div>
</div>
 

</div>

</div>



</section>



</MainLayout>


    </>
  )
}

export default What_is_in_your_mind
