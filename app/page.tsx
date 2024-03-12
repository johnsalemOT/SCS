import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/sections/HeroSection";
import ServicesSection from "./Components/sections/ServicesSection";
import AboutUsSection from "./Components/sections/AboutUsSection";
import ContactUsSection from "./Components/sections/ContactUsSection";
import FaqSection from "./Components/sections/FaqSection";
import Partners from "./Components/sections/Partners";
import Banner from "./Components/Banner";
import Footer from "./Components/sections/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main>
          <HeroSection />
          <AboutUsSection />
          <ServicesSection />
          <ContactUsSection />
          <FaqSection />
          <Partners />
          <Footer/>
        </main>
      </div>
    </>
  );
}
