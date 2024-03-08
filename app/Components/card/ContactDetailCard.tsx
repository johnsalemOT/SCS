import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { DM_Sans } from 'next/font/google';

interface ContactCardProps {
    Icon: StaticImageData;
    Title: string;
    description: string;
    overMapDisplay: boolean;
}
const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["500", "400"],
})

const ContactDetailCard: React.FC<ContactCardProps> = ({Icon, Title, description, overMapDisplay}) => {
    var shadow = '';
    var width ='';
    if(overMapDisplay){
        width = 'w-[463px]';
    }else {
        width = 'w-[503px]';
        shadow = 'shadow-custom';
    }
    
  return (
    <div className={`${width} bg-white p-4  rounded-[10px] ${shadow}`}>
        <div className='flex flex-row gap-4'>
        <div className='bg-[#0F9FD6] w-[50px] h-[50px] flex justify-center items-center rounded-full shadow-contact'>
        <Image src={Icon}  alt='Contact Icon'></Image>
        </div>
        <div>
        <h5 className={`${dm_sans.className} font-medium text-lg text-[#011632]`}>{Title}</h5>
        <p className={`text-[#3C4959] ${dm_sans.className} font-normal text-base`}>{description}</p>
        </div>
        </div>
    </div>
  )
}

export default ContactDetailCard