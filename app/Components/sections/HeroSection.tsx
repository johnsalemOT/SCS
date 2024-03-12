import React from "react";
import {Inter} from 'next/font/google'
import {DM_Sans} from 'next/font/google'
import {Outfit} from 'next/font/google'
import heroSectionImg from '../../../public/images/Ellipse 1.png'
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
  weight: ['400', '700'],
  style: ['normal', 'italic']
})
const HeroSection = () => {
  return (
    <section className="w-full  h-[90vh] p-24">
      <div className="flex justify-between w-full">
        <div className="flex-none w-[635px]">
            <h1 className={`text-[22px] ${dm_sans.className} font-bold text-[#0F9FD6] `}>Your Wound Care Specialist</h1>
            <h2 className={`text-[64px] ${dm_sans.className} font-bold text-[#274374] py-8`}>Discover Excellence in Wound Care at Your Doorstep</h2>
            <h6 className={`text-base  ${dm_sans.className} font-normal text-[#454245] w-[92%]`}>Welcome to <span className={`text-base ${dm_sans.className} font-bold text-[#0F9FD6] italic`}>Vital Heal</span>, where we bring physician-led wound care services to the comfort of your home. Our specialized team is dedicated to treating complicated wounds, collaborating with PCP teams, discharge planners, case managers, and families to ensure the best possible outcomes.</h6>
            <button className="my-8 bg-[#0F9FD6] p-3 rounded-lg hover:bg-[#0F9FD6]/50">
                <span className={`text-white ${inter.variable} font-sans font-medium `}>Schedule a Demo</span>
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
            <Image className=" absolute top-[-80px] right-[-50px]  -z-10" src={heroSectionImg} alt="Doctor applying wirst support to a patient"></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
