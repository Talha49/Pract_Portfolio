import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
const Creativity = () => {
    return (
       <section id='PF' className='container mx-auto px-4 py-10'>
        <Heading title="My Projects" />
     
     <div className='grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-2'>
  <div className='row-span-2 relative group'>
    <Image src="/about.jpg" alt="" width={300} height={200}/>
     <div className='bg-[#000000bd] absolute w-full md:w-[74%]  md:h-[63.5%] h-[62%] top-0 opacity-0 transition duration-300 group-hover:opacity-100 grid place-items-center text-white'>
       Project Title
     </div>
  </div>
  <div className='relative group'>
    <Image src="/i2.jpg" alt="" width={300} height={200}/>
     <div className='bg-[#000000bd] absolute w-full h-full top-0 opacity-0 transition duration-300 group-hover:opacity-100 grid place-items-center text-white'>
       Project Title
     </div>
  </div>
  <div className='relative group'>
    <Image src="/about.jpg" alt="" width={300} height={200}/>
     <div className='bg-[#000000bd] absolute w-full h-full top-0 opacity-0 transition duration-300 group-hover:opacity-100 grid place-items-center text-white'>
       Project Title
     </div>
  </div>
  <div className='relative group'>
    <Image src="/i3.jpg" alt="" width={300} height={200}/>
     <div className='bg-[#000000bd] absolute w-full h-full top-0 opacity-0 transition duration-300 group-hover:opacity-100 grid place-items-center text-white'>
       Project Title
     </div>
  </div>
  <div className='relative group'>
    <Image src="/i2.jpg" alt="" width={300} height={200}/>
     <div className='bg-[#000000bd] absolute w-full h-full top-0 opacity-0 transition duration-300 group-hover:opacity-100 grid place-items-center text-white'>
       Project Title
     </div>
  </div>
     </div>
     
       </section>
    )
}

export default Creativity

