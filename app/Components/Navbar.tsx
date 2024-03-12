import React from "react";
import { Kenia } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import Link from "next/link";
import DynamicNavbar from "./DynamicNavbar";
import Image from "next/image";
import scs from '../../public/images/SCSlogo.png'

const kumbh_sans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const kenia = Kenia({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <DynamicNavbar>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around">
          <div className={kenia.className}>
            <Link href={"#home"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="flex flex-col">
                <Image src={scs} alt='SCS logo' aria-label='SCS logo'></Image>
              </div>
              <span className="ml-3 text-[48px] uppercase text-[#002128] ">
                SCS
              </span>
            </Link>
          </div>
          <div className={kumbh_sans.className}>
            <ul className=" flex flex-wrap items-center text-base justify-center z-10">
              <li>
              <Link className="mr-10 text-[#454245]" href={"#about-us"}>
                About Us
              </Link>
              </li>
              <li>
              <Link className="mr-10 text-[#454245]" href={"#services"}>
                Services
              </Link>
              </li>
              <li>
              <Link className="mr-10 text-[#454245]" href={"#contact-us"}>
                Contact Us
              </Link>
              </li>
              <li>
              <Link className="mr-10 text-[#454245]" href={"#more"}>
                More
              </Link>
              </li>
              <li>
              <Link className="mr-10 text-[#454245]" href={"#partners"}>
                Partners
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </DynamicNavbar>
  );
};

export default Navbar;
