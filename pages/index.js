import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ABoutME from '@/components/ABoutME'
import WhatIDo from '@/components/WhatIDo'
import SKills from '@/components/SKills'
import Creativity from '@/components/Creativity'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useState } from 'react'
import SideBar from '@/components/SideBar'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

const [open, setOpen] = useState(false)

const toggleside = () => {

  setOpen(!open)
}

  return (
    <>
    <header>
   <Navbar toggleside = {toggleside} />
   </header>
   <main>
    <SideBar open= {open} toggleside = {toggleside} setOpen = {setOpen} />
   <Hero />
   <ABoutME />
   <WhatIDo/>
   <SKills />
   <Creativity />
   <Contact />
   </main>

   <Footer>
    <Footer />
   </Footer>
    </>
  )
}
