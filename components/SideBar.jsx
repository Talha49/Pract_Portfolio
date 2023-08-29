import React from 'react'
import { RiCloseFill } from 'react-icons/ri' 

const SideBar = ({toggleside, open, setOpen}) =>{

    return (
        <div className={`w-screen h-screen ${open ? "fixed" : "hidden"} md:hidden top-0 left-0 bg-gray-800 z-20 grid place-items-center text-center`}> 
            <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-pointer' onClick={toggleside} ><RiCloseFill /></div>
            <div className='flex flex-col gap-6 text-[28px]'>
                <a onClick={() => setOpen(false)} className='hover:text-[#ff4DA3]' href='#'  >Home</a>
                <a onClick={() => setOpen(false)}  className='hover:text-[#ff4DA3]' href='#id' >About</a>
                <a onClick={() => setOpen(false)}  className='hover:text-[#ff4DA3]' href='#PF' >Portfolios</a>
                <a onClick={() => setOpen(false)}  className='hover:text-[#ff4DA3]' href='#WD' >Services</a>
                <a onClick={() => setOpen(false)}  className='hover:text-[#ff4DA3]' href='#CU' >Contact Us</a>
            </div>
        </div>
    )
}

export default SideBar
