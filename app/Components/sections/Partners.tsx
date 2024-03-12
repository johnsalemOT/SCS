import React from "react";
import StylishUnderline from "../../../public/images/stylishUnderline1.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import logo1 from "../../../public/images/Partner_logo_1.png";
import logo2 from "../../../public/images/Partner_logo_2.svg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400"],
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Partners = () => {
  return (
    <section id="partners" className="h-[400px] bg-[#274374] p-8">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`${dm_sans.className} font-bold text-base  text-[#0F9FD6]`}
          >
            Partners
          </h1>
          <Image
            src={StylishUnderline}
            alt="Sytlish Underline"
          ></Image>
        </div>
        <div className="flex flex-row justify-center items-center gap-40 py-16">
          <div className="flex flex-col justify-center items-center w-[330px] gap-4">
            <Image src={logo2} alt='Hospice'></Image>
            <p className={`${poppins.className} text-[22px] text-white text-center`}>Certified hospice and palliative care nurses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
