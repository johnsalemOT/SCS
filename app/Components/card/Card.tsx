import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'
import { Poppins } from 'next/font/google'

interface CardProps {
    image: StaticImageData,
    Text: string,
}

const poppins = Poppins ({
    subsets:['latin'],
    weight:['400'],
})

const Card: React.FC<CardProps> = ({image, Text}) => {
  return (
    <article className='flex flex-col items-center p-8 w-[430px] h-[290px] bg-[#FAFDFF] rounded-[10px] shadow-card'>
        <div className='bg-[#0F9FD6] w-[41.1px] h-[41.1px] rounded-full blur-md absolute z-10'>
        </div>
        <header className='flex bg-[#0F9FD6] w-[41.1px] h-[41.1px] rounded-full justify-center items-center z-20'>
        <Image src={image} alt='Smiley icon' aria-label='Smiley Icon'></Image>
        </header>
        <main>
        <p className={`${poppins.className} text-center text-base text-[#3C4959] pt-8`}>{Text}</p>
        </main>
    </article>
  )
}

export default Card

/* Ellipse 4 */
/* Ellipse 5 */




