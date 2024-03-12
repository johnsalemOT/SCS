import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import StylishUnderline from '../../../public/images/stylishUnderline.png'
import {Inter} from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import Doctor from '../../../public/images/doctor.png'
import Card from '../card/Card'
import communications from '../../../public/images/communications.png'
import patientheart from '../../../public/images/patientheart.png'
import support from '../../../public/images/support.png'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '400'],
})
const inter = Inter ({
  subsets: ['latin'],
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight:['700', '400']
})

const data  = [
  {
    icon: support,
    title: 'Compassionate Expertise',
    body: ' A team dedicated to understanding and addressing the unique challenges of chronic and critical illnesses.',
  },
  {
    icon: support,
    title: 'Patient-Centered Approach',
    body: 'Placing the patient, their family, and the medical team at the heart of our care philosophy.',
  },
  {
    icon: support,
    title: 'Effective Communication',
    body: 'Bridging the gap between treatment modalities, physician viewpoints, and patient outcomes.',
  },
]

const AboutUsSection = () => {

  
  return (
    <div id='about-us' className='bg-[white] py-4 my-16'>
    <div className='bg-[#E6F6FE]  flex flex-col  items-center py-16 px-52 h-[440px]'>
      <div className='max-w-[1200px] flex flex-col justify-center items-center gap-1'>
        <h1 className={`text-center ${dm_sans.className} text-base text-[#25B4F8] font-bold`}>About Us</h1>
        <p className={`text-center ${dm_sans.className} font-normal text-[#3C4959] pt-6 pb-8 `}>At Supportive Care Specialists, we redefine healthcare by merging expertise with empathy. Our consulting service is dedicated to providing palliative care for patients facing chronic and critical illnesses. We focus on managing complicated medical issues, psychosocial challenges, spiritual pain, and physical symptoms, ensuring that individuals and their families navigate their journey with care and compassion.</p>
      </div>
      <h2 className={`text-4xl ${dm_sans.className} text-[#274374] font-bold pt-8`}>Why Choose Supportive Care Specialists?</h2>
    </div>
    <div className='flex flex-row justify-center items-center mt-[-100px] gap-8'>
      {data.map((item)=>{
       return(
        <div key={item.title}>
         <Card title={item.title} body={item.body} icon={item.icon}></Card> 
         </div>
         )
      })
      }
    </div>
</div>
    )
  }
  
  export default AboutUsSection
  // <section id='about-us' className='h-screen'>
  //   <div className='flex flex-col justify-center items-center'>
  //    <h1 className={`${poppins.className} font-normal text-[22px] text-[#011632`}>About Us</h1>
  //    <Image src={StylishUnderline} alt='Sytlish Underline' className='-mt-1'></Image>
  //  </div>
  //   <div className='flex flex-row justify-center p-8 py-20 px-64'>
  //     <div className='flex flex-col gap-4 basis-1/2'>
  //     <article className='flex flex-col gap-4'>
  //       <header>
  //       <h2 className={`${inter.className} text-[32px] font-semibold text-[#011632]`}>Our Mission</h2>
  //       </header>
  //       <main>
  //       <p className={`${inter.className} text-[#3C4959] text-[18px] font-normal`}>
  //       The mission of a wound care specialist is to provide expert, compassionate, and comprehensive care to individuals suffering from acute or chronic wounds. These specialists are dedicated to improving the quality of life for patients by promoting wound healing, preventing complications, and restoring tissue integrity. Their mission encompasses several key 
  //       </p>
  //       </main>
  //     </article>
  //     <article className='flex flex-col gap-4'>
  //       <header>
  //       <h3 className={`${inter.className} text-[24px] font-medium text-[#011632]`}>Advocacy and Support.</h3>
  //       </header>
  //       <main>
  //       <p className={`${inter.className} text-[#3C4959] text-[18px] font-normal`}>
  //       The mission of a wound care specialist is to provide expert, compassionate, and comprehensive care to individuals suffering from acute or chronic wounds. These specialists are dedicated to improving the quality of life for patients by promoting wound healing, preventing complications, and restoring tissue integrity. Their mission encompasses several key 
  //       </p>
  //       </main>
  //     </article>
  //     <article className='flex flex-col gap-4'>
  //       <header>
  //       <h3 className={`${inter.className} text-[24px] font-medium text-[#011632]`}>Quality Improvement and Outcome Measurement:</h3>
  //       </header>
  //       <main>
  //       <p className={`${inter.className} text-[#3C4959] text-[18px] font-normal`}>
  //       The mission of a wound care specialist is to provide expert, compassionate, and comprehensive care to individuals suffering from acute or chronic wounds. These specialists are dedicated to improving the quality of life for patients by promoting wound healing, preventing complications, and restoring tissue integrity. Their mission encompasses several key 
  //       </p>
  //       </main>
  //     </article>
  //     </div>

  //     <figure className='basis-1/2 pl-20'>
  //       <Image className='' src={Doctor} alt='A Picture of a Doctor'></Image>
  //       <figcaption>fig.1 A Picture of a Doctor</figcaption>
  //     </figure>
  //   </div>
  // </section>