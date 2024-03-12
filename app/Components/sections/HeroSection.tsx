import React from "react";
import {Inter} from 'next/font/google'
import {DM_Sans} from 'next/font/google'
import {Outfit} from 'next/font/google'
import heroSectionImg from '../../../public/images/herosection.png'
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
})
const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic']
})
const HeroSection = () => {
  return (
    <section className="w-full  h-[90vh] p-24">
      <div className="flex justify-between w-full">
        <div className="flex-none w-[635px]">
            <h1 className={`text-[22px] ${dm_sans.className} font-bold text-[#0F9FD6] `}>Welcome to Supportive Care Specialists</h1>
            <h2 className={`text-[64px] ${dm_sans.className} font-bold text-[#274374] py-8`}>Where Compassion Meets Expertise</h2>
            <h6 className={`text-base  ${dm_sans.className} font-normal text-[#454245] w-[92%]`}>In the realm of healthcare, where care meets compassion,<span className={`text-base ${dm_sans.className} font-medium text-[#0F9FD6] italic`}> Supportive Care Specialists</span> stand as your dedicated partners. We are more than a consulting service; we are your guides on the journey through chronic and critical illnesses, offering palliative care with a unique blend of expertise and empathy.</h6>
            <button className="mb-8 mt-16 bg-[#0F9FD6] p-3 rounded-lg hover:bg-[#0F9FD6]/50">
                <span className={`text-white ${inter.variable} font-sans font-medium `}>Schedule a Consultant</span>
            </button>
            <div className="flex gap-1">
                <a href="https://www.instagram.com/vitalheal/?hl=en" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-center items-center gap-1">
                    <FaInstagram className="w-5 h-5 text-[#274374]" />
                    <p className={`${outfit.variable} font-outfit text-[#274374] text-[14px]`}>Instagram</p>
                    </div>
                </a>
                <a href="https://www.facebook.com/vitalheal/" target="_blank" rel="noopener noreferrer">
                   <div className="flex justify-center items-center gap-1">
                    <LiaFacebook className="w-5 h-5 text-[#274374]" />
                    <p className={`${outfit.variable} font-outfit text-[#274374] text-[14px]`}>Facebook</p>
                   </div>
                </a>
                <a href="https://www.youtube.com/channel/UC-99999999" target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center items-center gap-1">
                    <AiOutlineYoutube className="w-5 h-5 text-[#274374]" />
                    <p className={`${outfit.variable} font-outfit text-[#274374] text-[14px]`}>Youtube</p>
                  </div>
                </a>
            </div>
        </div>
        <div className="flex-1 relative">
            <div className="xl:w-[782px] xl:h-[833px] bg-[#E6F6FE] top-[-600px] right-[-96px] -z-10 rounded-bl-full  rounded-br-full rounded-tl-full absolute"></div>
            <div className="xl:w-[400px] xl:h-[833px] bg-[#274374]/[0.7] rounded-tl-full rounded-bl-full  -z-10 top-[-160px] right-[-96.1px] absolute"></div>
            <Image className=" absolute top-[-80px] right-[-50px] rounded-full  -z-10" src={heroSectionImg} alt="Doctor applying wirst support to a patient" typeof="image/png"></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
