import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'
import { DM_Sans } from 'next/font/google'
import image from "../../../public/images/star.png"
interface CardProps {
    icon: StaticImageData,
    title: string,
    bullet1: string,
    bullet2: string,
}

const dm_sans = DM_Sans ({
    subsets:['latin'],
    weight:['400', '700'],
})

const LabelCard: React.FC<CardProps> = ({title, bullet1, icon, bullet2}) => {
  return (
    <article className='flex flex-row gap-8 p-8 w-[630px] h-[165px] bg-white rounded-[20px] border border-[#E4E4E7]'>
          {/* <div className='bg-[#0F9FD6] w-[100.1px] h-[100.1px] rounded-full blur-md absolute z-10'>
          </div> */}
        <header className='flex bg-[#C3E6F3] w-[55.1px] h-[55.1px] rounded-full border-8 border-[#E5F4FF] justify-center items-center z-20'>
        <Image src={icon} className='w-[24px] h-[24px]' alt='Star icon' aria-label='Star Icon'></Image>
        </header>
        <main>
        <h1 className={`${dm_sans.className} pt-4 text-gray-900 font-bold pb-2`}>{title}</h1>
        <ul className={`${dm_sans.className} font-normal text-base list-disc list-outside pl-5`} >
            <li>{bullet1}</li>
            <li>{bullet2}</li>
        </ul>
        </main>
    </article>
  )
}

export default LabelCard

/* Ellipse 4 */
/* Ellipse 5 */




