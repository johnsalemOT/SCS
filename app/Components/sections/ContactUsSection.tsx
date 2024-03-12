import React from "react";
import StylishUnderline from "../../../public/images/stylishUnderline.png";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import ContactDetailCard from "../card/ContactDetailCard";
import { Inter } from "next/font/google";
import Phone from '../../../public/images/phone.png';
import Pin from '../../../public/images/pin.png';
import Email from '../../../public/images/email.png';
import Map from "../map/Map";
import ContactUsForm from "../Form/ContactUsForm";
import contactus from '../../../public/images/contactus.svg'


const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "400", '700'],
});


const inter = Inter({
  subsets: ["latin"],
});


const ContactUsSection = () => {
  const contactDetails = {
    address:'1441 Morris Ave, Union, NJ 07083',
    email: 'Smile01@gmail.com',
    phone: '0900-78601'
  }

  

  return (
    <section id="contact-us" className="h-screen p-8 flex flex-col items-center">
      <div className='relative'>
        <Image src={contactus} alt='decor' className='absolute left-[-200px] top-[40px]'></Image>
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`${dm_sans.className} font-bold text-base text-[#25B4F8]`}
          >
            Contact Us
          </h1>
          <Image
            src={StylishUnderline}
            alt="Sytlish Underline"
            className="-mt-1"
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-center py-8 gap-4">
          <h2 className={`${dm_sans.className} font-bold text-[32px] text-[#274374]`}>Connect with Supportive Care Specialists</h2>
          <h6 className={`${inter.className} text-[#3C4959] text-lg`}>
          Have questions or ready to embark on your healing journey? Fill out the form below, and one of our caring team members will reach out to you shortly.
          </h6>
        </div>
      </div>
      <div className="flex flex-row justify-center  gap-8 max-w-[1050px] mt-8">
        <div className="relative">
          <Map />
          <div className="absolute top-[200px] left-[20px]">
            <ContactDetailCard Icon={Pin} Title="Office Address" description={contactDetails.address} overMapDisplay={true}/>
          </div>
          <div className="py-4">
            <ContactDetailCard Title="Email Address" Icon={Email} description={contactDetails.email} overMapDisplay={false}/>
          </div>
          <div>
            <ContactDetailCard Title="Phone Number" Icon={Phone} description={contactDetails.phone} overMapDisplay={false}/>
          </div>
        </div>
        <div className="border border-[#25B4F8] rounded-[10px] p-8">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

// <iframe
// width={"503px "}
// height="325px"
// style={{ border: 0, borderRadius: "10px", marginTop: "1rem" }}
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33.6074086!2d73.100091!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb96a77dbcff%3A0x936bce527a1d6838!2sOctathorn+Technologies!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
// allowFullScreen
// title="Google Map"
// >
// </iframe>