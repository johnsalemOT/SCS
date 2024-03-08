import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import StylishUnderline from '../../../public/images/stylishUnderline.png'
import {Inter} from 'next/font/google'
import Doctor from '../../../public/images/doctor.png'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '400'],
})
const inter = Inter ({
  subsets: ['latin'],
})


const AboutUsSection = () => {

  
  return (
    <section id='about-us' className='h-screen'>
      <div className='flex flex-col justify-center items-center'>
       <h1 className={`${poppins.className} font-normal text-[22px] text-[#011632`}>About Us</h1>
       <Image src={StylishUnderline} alt='Sytlish Underline' className='-mt-1'></Image>
     </div>
      <div className='flex flex-row justify-center p-8 py-20 px-64'>
        <div className='flex flex-col gap-4 basis-1/2'>
        <article className='flex flex-col gap-4'>
          <header>
          <h2 className={`${inter.className} text-[32px] font-semibold text-[#011632]`}>Our Mission</h2>
          </header>
          <main>
          <p className={`${inter.className} text-[#3C4959] text-[18px] font-normal`}>
          The mission of a wound care specialist is to provide expert, compassionate, and comprehensive care to individuals suffering from acute or chronic wounds. These specialists are dedicated to improving the quality of life for patients by promoting wound healing, preventing complications, and restoring tissue integrity. Their mission encompasses several key 
          </p>
          </main>
        </article>
        <article className='flex flex-col gap-4'>
          <header>
          <h3 className={`${inter.className} text-[24px] font-medium text-[#011632]`}>Advocacy and Support.</h3>
          </header>
          <main>
          <p className={`${inter.className} text-[#3C4959] text-[18px] font-normal`}>
          The mission of a wound care specialist is to provide expert, compassionate, and comprehensive care to individuals suffering from acute or chronic wounds. These specialists are dedicated to improving the quality of life for patients by promoting wound healing, preventing complications, and restoring tissue integrity. Their mission encompasses several key 
          </p>
          </main>
        </article>
        <article className='flex flex-col gap-4'>
          <header>
          <h3 className={`${inter.className} text-[24px] font-medium text-[#011632]`}>Quality Improvement and Outcome Measurement:</h3>
          </header>
          <main>
          <p className={`${inter.className} text-[#3C4959] text-[18px] font-normal`}>
          The mission of a wound care specialist is to provide expert, compassionate, and comprehensive care to individuals suffering from acute or chronic wounds. These specialists are dedicated to improving the quality of life for patients by promoting wound healing, preventing complications, and restoring tissue integrity. Their mission encompasses several key 
          </p>
          </main>
        </article>
        </div>

        <figure className='basis-1/2 pl-20'>
          <Image className='' src={Doctor} alt='A Picture of a Doctor'></Image>
          <figcaption>fig.1 A Picture of a Doctor</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default AboutUsSection