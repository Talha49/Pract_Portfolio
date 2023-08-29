import React from 'react'
import Heading from './Heading'
import {RiLightbulbFlashLine} from 'react-icons/ri'

const WhatIDo = () => {
    return (
        <section id='WD' className='container mx-auto px-4 py-10'>
<Heading title="What I Do" />
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
    <div className='bg-[#ff4D43] shadow-lg  flex flex-col gap-4 px-8 py-10'>
        <RiLightbulbFlashLine className='text-[28px]' />
        <h2 className='font-medium text-[20px]'>Web Designs</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, commodi fugit modi aperiam molestiae ipsam sapiente? Rerum dolor eos similique commodi fugit modi aperiam molestiae ipsam sapiente? Rerum dolor eos similique.</p>
    </div>
    <div className='bg-[#ff4D43] shadow-lg flex flex-col gap-4 px-8 py-10'>
        <RiLightbulbFlashLine className='text-[28px]' />
        <h2 className='font-medium text-[20px]'>Web Designs</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, commodi fugit modi aperiam molestiae ipsam sapiente? Rerum dolor eos similique commodi fugit modi aperiam molestiae ipsam sapiente? Rerum dolor eos similique.</p>
    </div>  <div className='bg-[#ff4D43] shadow-lg flex flex-col gap-4 px-8 py-10'>
        <RiLightbulbFlashLine className='text-[28px]' />
        <h2 className='font-medium text-[20px]'>Web Designs</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, commodi fugit modi aperiam molestiae ipsam sapiente? Rerum dolor eos similique commodi fugit modi aperiam molestiae ipsam sapiente? Rerum dolor eos similique.</p>
    </div>
</div>

        </section>
    )
}

export default WhatIDo
