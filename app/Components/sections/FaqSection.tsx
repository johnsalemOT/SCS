'use client';
import React, { useState } from 'react';
import { DM_Sans } from 'next/font/google';
import StylishUnderline from '../../../public/images/stylishUnderline.png'
import Image from 'next/image';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What types of wounds do you specialize in?',
    answer:
      'We specialize in complicated wounds, working closely with physicians for tailored solutions',
  },
  {
    question: 'How do you collaborate with families in the healing process?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
  },
  {
    question: 'What home settings do you operate in?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
  },
  {
    question: 'Why is Webflow the best nocode tool?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
  },
  {
    question: 'Why is Webflow the best nocode tool?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
  },

];

const FaqSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(faqData.length).fill(false));

  const toggleAnswer = (index: number) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section id='more'>
      <div className="bg-white">
        <div className="container px-6 py-12 mx-auto">
        <div className='flex flex-col justify-center items-center py-4'>
       <h1 className={`${dm_sans.className} font-bold text-base text-[#0F9FD6]`}>More</h1>
       <Image src={StylishUnderline} alt='Sytlish Underline' className='-mt-1'></Image>
     </div>
          <h2 className="text-2xl font-semibold text-[#1B3C74] lg:text-3xl text-center">Frequently asked questions</h2>

          <div className="mt-8 space-y-8 lg:mt-12">
            {faqData.map((item, index) => (
              <article
                key={index}
                className={`p-8 rounded-[10px]  ${isOpen[index] ? 'bg-[#E6F6FE]' : ''}  transition-colors duration-500 ease shadow-custom`}
              >
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAnswer(index)}
                >
                  <header>
                  <h4 className={`font-bold text-[#18181B] ${dm_sans.className} text-lg`}>{item.question}</h4>
                  </header>

                  <div className="text-white bg-[#0F9FD6] w-[45px] h-[45px] rounded-md flex justify-center items-center shadow-custom">
                    {isOpen[index] ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                  </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                  <main>
                <p className={` transition-all mt-6 text-base text-[#1D1C1D] ${dm_sans.className} ${isOpen[index] ? 'block' : 'hidden'} duration-1000 ease`}>
                  {item.answer}
                </p>
                  </main>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;