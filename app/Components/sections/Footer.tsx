import React from "react";
import { Jost } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import Facebook from '../../../public/images/facebook.png'
import Youtube from '../../../public/images/youtube.png'
import Vimeo from '../../../public/images/vimeo.png'
import Twitter from '../../../public/images/twitter.png'
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bebus_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="h-[600px] bg-[url('/images/footer.png')] flex flex-col items-center justify-evenly">
      <div className=" pt-16">
        <div className="flex flex-row bg-white  p-12 rounded-[10px] justify-center items-center shadow-custom">
          <h1
            className={`${jost.className} font-normal text-[32px] text-[#0A142F]`}
          >
            Subscribe Newsletter
          </h1>
          <div>
            <div className="w-full flex flex-row justify-between  bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 ml-6 leading-8 transition-colors duration-200 ease-in-out">
              <input type="email" placeholder="Enter your email"></input>
              <button type="submit" className="bg-[#0F9FD6] p-2 px-12 rounded-[10px] text-white font-semibold">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between min-w-[1200px] ">
          <div className="flex flex-row">
              <p className={`p-8 ${jost.className} font-medium text-[#454245]`}>Services</p>
              <p className={`p-8 ${jost.className} font-medium text-[#454245]`}>About Us</p>
              <p className={`p-8 ${jost.className} font-medium text-[#454245]`}>Partners</p>
              <p className={`p-8 ${jost.className} font-medium text-[#454245]`}>More</p>
              <p className={`p-8 ${jost.className} font-medium text-[#454245]`}>Contact Us</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
              <Image className="w-[26px] h-[24px]" src={Facebook} alt='Facebook'></Image>
              <Image className="w-[26px] h-[20px]"  src={Twitter} alt='Twitter'></Image>
              <Image className="w-[26px] h-[21px]"  src={Vimeo} alt='Vimeo'></Image>
              <Image className="w-[26px] h-[17px]"  src={Youtube} alt='Youtube'></Image>
          </div>
      </div>
      <hr className="min-w-[1250px]"/>
      <div className="flex flex-row justify-between w-[1400px] items-center">
        <p className={`text-[#0A142F] ${jost.className} text-sm`}>&#169; Copyright 2022, All Rights Reserved by Vital Heal</p>
        <div className={bebus_neue.className}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="flex flex-col">
                <div className="bg-[#274374] w-8 h-8 rotate-45 -mb-4"></div>
                <div className="bg-[#537ABE] w-8 h-8 rotate-45"></div>
                <div></div>
              </div>
              <span className="ml-3 text-2xl uppercase text-[#274374] ">
                Vital Heal
              </span>
            </a>
          </div>
          <div className="flex flex-row">
            <p className={`text-[#0A142F] ${jost.className} text-sm`}>Terms of Service</p>
            <p className={`text-[#0A142F] ${jost.className} text-sm`}>Privacy Policy</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
