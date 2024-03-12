import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'
import { DM_Sans } from 'next/font/google'
import image from "../../../public/images/star.png"
interface CardProps {
    icon: StaticImageData,
    title: string,
    body: string,
}

const dm_sans = DM_Sans ({
    subsets:['latin'],
    weight:['400', '700'],
})

const Card: React.FC<CardProps> = ({title, body, icon}) => {
  return (
    <article className='flex flex-col items-center p-8 w-[430px] h-[290px] bg-white rounded-[20px] border border-[#E4E4E7]'>
          {/* <div className='bg-[#0F9FD6] w-[100.1px] h-[100.1px] rounded-full blur-md absolute z-10'>
          </div> */}
        <header className='flex bg-[#C3E6F3] w-[55.1px] h-[55.1px] rounded-full border-8 border-[#E5F4FF] justify-center items-center z-20'>
        <Image src={icon} className='w-[24px] h-[24px]' alt='Star icon' aria-label='Star Icon'></Image>
        </header>
        <main>
        <h1 className={`${dm_sans.className} text-center pt-4 text-gray-900 font-bold`}>{title}</h1>
        <p className={`${dm_sans.className} text-center text-base pt-4 text-gray-900`}>{body}</p>
        </main>
    </article>
  )
}

export default Card

/* Ellipse 4 */
/* Ellipse 5 */




