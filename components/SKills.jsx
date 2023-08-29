import React from 'react'
import Heading from './Heading'

const SKills = () => {
    return (
        <section id='SK' className='container mx-auto px-4 py-10'>
            <Heading title="Skills" />
        
        <p className='text-gray-600 mb-10  -mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolorum eius sapiente quis commodi, deleniti aliquam?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
           <div>
            <p>React Js.</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
            </div>
            </div>
            <div>
            <p>HTML 5</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[96%]'></div>
            </div>
            </div>
            <div>
            <p>Tailwind Css</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[86%]'></div>
            </div>
            </div>
            <div>
            <p>Next Js.</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[98%]'></div>
            </div>
            </div>
            <div>
            <p>Django</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[100%]'></div>
            </div>
            </div>
        </div>
        
        
        
        
        </section>
    )
}

export default SKills
