import React from 'react'
import { Poppins } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'
import StylishUnderline from '../../../public/images/stylishUnderline.png'
import Image from 'next/image'
import CardMapOver from '../card/CardMapOver'
import { title } from 'process'
import { Metadata } from 'next'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '400'],
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400'],
})
const inter = Inter ({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Services'
}

const ServicesSection = () => {
  return (
    <section id='services' className='h-screen px-24 py-10 flex flex-col items-center'>
      <div>
     <div className='flex flex-col justify-center items-center'>
       <h1 className={`${poppins.className} font-normal text-[22px]  text-[#011632`}>Services</h1>
       <Image src={StylishUnderline} alt='Sytlish Underline' className='-mt-1'></Image>
     </div>
     <div className='flex flex-col justify-center items-center py-4 gap-1'>
      <h2 className={`text-[32px] text-[#0F9FD6] font-semibold ${inter.className}`}>Palliative Care</h2>
      <p className={`${dm_sans.className} text-[#3C4959] text-base`}>Benefits of Implementing Supportive Care in a Hospital Setting</p>
     </div>
      </div>
     <div className='flex flex-wrap justify-center items-center gap-16 py-8'>
      <CardMapOver />
     </div>
    </section>
  )
}

export default ServicesSection