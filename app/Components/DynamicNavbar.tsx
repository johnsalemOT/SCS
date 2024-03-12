'use client';
import React, { useEffect, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}


const DynamicNavbar: React.FC<Props> = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState('bg-transparent');
  const [navbarAnimation, setNavbarAnimation] = useState('ml-0')

  useEffect(() => {
    const changeNavbarColor = () => {
      console.log(window.scrollY);
      if(window.scrollY > 3100){
        setNavbarColor('bg-white');
        setNavbarAnimation('ml-[-280px]')
      }
      else if(window.scrollY > 2200){
        setNavbarColor('bg-white');
        setNavbarAnimation('ml-[-220px]')
      }
      else if (window.scrollY > 1250) {
        setNavbarColor('bg-white');
        setNavbarAnimation('ml-[-160px]')
      } else if( window.scrollY > 850) {
        setNavbarColor('bg-white');
        setNavbarAnimation('ml-[-80px]')
      }else if(window.scrollY > 150){
        setNavbarColor('bg-white');
        setNavbarAnimation('ml-0')
      }else{
        setNavbarColor('bg-transparent');
        setNavbarAnimation('ml-0')
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <nav className={`sticky top-0 ${navbarColor} ${navbarAnimation} transition-all duration-500 delay-75 ease z-50`}>
      {children}
    </nav>
  );
};

export default DynamicNavbar
