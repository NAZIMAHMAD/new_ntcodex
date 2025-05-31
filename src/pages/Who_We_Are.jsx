import React from 'react'
import MainLayout from '../layout/MainLayout'
import Hero from '../components/Hero'
import img32 from '../assets/Images/img32.jpg';

const Who_Am_I = () => {
  return (
    <>
     <MainLayout>

    <Hero h1="what we are"
p="About us"
style="bg-[#1d2549]"/>


<section className='lg:px-28 px-3 bg-[#1d2549] pb-12'>

  <div className='container mx-auto text-white lg:px-20 px-0 text-lg grid grid-cols-1 gap-10'>

<p>Tata Consultancy Services (TCS) (BSE: 532540, NSE: TCS) is a digital transformation and technology partner of choice for industry-leading organizations worldwide. Since its inception in 1968, TCS has upheld the highest standards of innovation, engineering excellence and customer service.</p>

<p>Rooted in the heritage of the Tata Group, TCS is focused on creating long term value for its clients, its investors, its employees, and the community at large. With a highly skilled workforce of over 607,000 consultants in 55 countries and 180 service delivery centres across the world, the company has been recognized as a top employer in six continents. With the ability to rapidly apply and scale new technologies, the company has built long term partnerships with its clients – helping them emerge as perpetually adaptive enterprises. Many of these relationships have endured into decades and navigated every technology cycle, from mainframes in the 1970s to Artificial Intelligence today.</p>

<p>TCS sponsors 15 of the world’s most prestigious marathons and endurance events, including TCS New York City Marathon, TCS London Marathon and TCS Sydney Marathon with a focus on promoting health, sustainability, and community empowerment. TCS generated consolidated revenues of US $29 billion in the fiscal year ended March 31, 2024.</p>

  </div>

</section>


<section className='h-[50rem]' style={{backgroundImage:`url(${img32})`, backgroundSize:'cover', backgroundPosition:'center'}}>



</section>



      </MainLayout> 





    </>
  )
}

export default Who_Am_I
