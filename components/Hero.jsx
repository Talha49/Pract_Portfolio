import React from 'react'
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Hero = () => {
    return (
        <div className='bg-[url("/hero.jpg")] h-screen  bg-cover bg-fixed flex items-center '>
            <div className='container mx-auto px-4'>
       <div className='text-white max-w-[450px] flex flex-col gap-[48px] '>
           <div>
            <h1 className='text-5xl'>Im Talha Ghauri </h1>
            <h4 className='text-2xl mt-3'>
            <Typewriter
  options={{
    strings: ['Front-End Developer', 'Shopify Developer'],
    autoStart: true,
    loop: true,
  }}
/>
            </h4>
           </div>

           <div className='bg-[#ff4DA3] h-[2px] w-[40px]'></div>
           <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore optio totam, dolore cupiditate necessitatibus amet cum aliquid! Ad dignissimos !</p>
           <Button link="/" text="Learn More"  />
           </div>
       </div>
            </div>

        </div>
    )
}

export default Hero
