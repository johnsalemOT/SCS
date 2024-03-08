'use client';
import React, { useState } from 'react';
import { DM_Sans } from 'next/font/google';

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
    question: 'Why is Webflow the best nocode tool?',
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
            <h6 className='text-lg font-semibold text-[#2AA7FF] p-1 text-center'>More</h6>
          <h2 className="text-2xl font-semibold text-[#1B3C74] lg:text-3xl text-center">Frequently asked questions</h2>

          <div className="mt-8 space-y-8 lg:mt-12">
            {faqData.map((item, index) => (
              <article
                key={index}
                className={`p-8 rounded-[10px]  ${isOpen[index] ? 'bg-[#E6F6FE]' : ''}`}
              >
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAnswer(index)}
                >
                  <header>
                  <h4 className={`font-bold text-[#18181B] ${dm_sans.className} text-lg`}>{item.question}</h4>
                  </header>

                  <span className="text-white bg-[#0F9FD6] rounded-md">
                    {isOpen[index] ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                  </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </span>
                </button>
                  <main>
                <p className={`mt-6 text-base text-[#1D1C1D] ${dm_sans.className} ${isOpen[index] ? 'block' : 'hidden'}`}>
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