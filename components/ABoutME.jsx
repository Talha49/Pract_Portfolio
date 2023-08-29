import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import {AiOutlineGift} from 'react-icons/ai';
import {FiBookOpen} from 'react-icons/fi';
import {BsGlobe2} from 'react-icons/bs';
import {TbPacman} from 'react-icons/tb';
import {CiLocationOn} from 'react-icons/ci'
import Button from './Button';


const ABoutME = () => {
    return (
        <section id='id' className='container mx-auto py-10 px-4 '>
          <Heading title="About Me" />
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <Image src="/about.jpg" alt='pc' width={400} height={200}/>
            </div>
           <div className='mt-7 md:-mt-1'>
            <div className='flex items-center justify-between w-[300px]'>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center font-medium gap-4'>
                        <AiOutlineGift className='text-[22px] text-[#ff4D41]' />
                        Birthday
                    </div>
                    
                    <div className='flex items-center font-medium gap-4'>
                        <FiBookOpen className='text-[22px] text-[#ff4D41]' />
                        Study
                    </div>
          
                    <div className='flex items-center font-medium gap-4'>
                        <BsGlobe2 className='text-[22px] text-[#ff4D41]' />
                        Website
                    </div>
                    <div className='flex items-center font-medium gap-4'>
                        <TbPacman className='text-[22px] text-[#ff4D41]' />
                        Interest
                    </div>
                    <div className='flex items-center font-medium gap-4'>
                        <CiLocationOn className='text-[22px] text-[#ff4D41]' />
                        Location
                    </div>
                    
                </div>
               <div className='flex flex-col gap-6'>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
               </div>
 <div className='flex flex-col gap-6'>
    <div>21 - 07 - 03</div>
    <div>University of Szabist</div>
    <div>www.dumy.com</div>
    <div>Developing, Music</div>
    <div>4567 LandLund TX</div>
 </div>

 
            </div>
            <div>
    <h2 className='mt-16 mb-10 font-bold'>Im Talha and Front End Developer</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius temporibus velit veniam dolorem?</p>
 <Button link="#" text="Hire Me" />
 </div>
           </div>













          </div>


        </section>
    )
}

export default ABoutME
