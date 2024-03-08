import React from "react";
import { Bebas_Neue } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import Link from "next/link";
import DynamicNavbar from "./DynamicNavbar";

const kumbh_sans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const bebus_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <DynamicNavbar>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around">
          <div className={bebus_neue.className}>
            <Link href={"#home"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="flex flex-col">
                <div className="bg-[#274374] w-8 h-8 rotate-45 -mb-4"></div>
                <div className="bg-[#537ABE] w-8 h-8 rotate-45"></div>
                <div></div>
              </div>
              <span className="ml-3 text-2xl uppercase text-[#274374] ">
                Vital Heal
              </span>
            </Link>
          </div>
          <div className={kumbh_sans.className}>
            <ul className=" flex flex-wrap items-center text-base justify-center z-10">
              <li>
              <Link className="mr-10 text-[#454245]" href={"#services"}>
                Services
              </Link>
              </li>
              <li>
              <Link className="mr-10 text-[#454245]" href={"#about-us"}>
                About Us
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
