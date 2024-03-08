'use client';
import React, { useEffect, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}


const DynamicNavbar: React.FC<Props> = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState('bg-transparent');

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY > 900) {
        setNavbarColor('bg-white');
      } else {
        setNavbarColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <nav className={`sticky top-0 ${navbarColor} transition delay-0 ease-in-out z-50`}>
      {children}
    </nav>
  );
};

export default DynamicNavbar
