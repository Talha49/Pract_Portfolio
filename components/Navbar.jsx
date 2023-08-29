import React from 'react'
import Link from 'next/link'
import { FiDownload, FiMenu } from "react-icons/fi";

const Navbar = ({toggleside}) => {
    return (
        <div className='bg-white fixed  w-full z-10 shadow-2xl'>
            <div className='mx-auto flex justify-between items-center px-4 py-4'>
                  <div className='text-[24px]'>TG Threads</div>
                  <div className='hidden md:flex gap-6'>
                    <Link href="/"> 
                      Home 
                    </Link>
                    <Link href="#id"> 
                         About
                    </Link>
                    <Link href="#WD"> 
                         Services
                    </Link>
                    <Link href="#SK"> 
                         SKills
                    </Link>
                    <Link href="#CU"> 
                         Contact Us
                    </Link>
                  </div>

                  <a className='hidden border px-4 py-1 rounded-[5px] bg-[#283236d6] hover:bg-transparent hover:text-black text-white md:flex items-center gap-2'>Download CV<FiDownload/></a>
                  <div className='md:hidden text-[27px]' onClick= {toggleside}>
                     <FiMenu />
                  </div>
            </div>
        </div>
    )
}

export default Navbar
