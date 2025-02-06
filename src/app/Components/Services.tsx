import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './Contact';
import AnimatedText from './AnimatedText';
AnimatedText
gsap.registerPlugin(ScrollTrigger);

interface TextItem {
  id: string;
  text: string;
}

export default function Services() {
  const textItems: TextItem[] = [
    { id: '02', text: 'branding' },
    { id: '03', text: 'design' },
    { id: '04', text: 'Development' },
    { id: '01', text: 'Collaboration' },
  ];


  return (
    <div className="mt-[30%] text-center">
      <div className="title text-[9vw] uppercase font-bold">
        {textItems.map((item) => (
          <div key={item.id} className={`_${item.id}`}>
            <div className="tracking-[-0.05em] leading-none">
              <div className="gradient-text">        <AnimatedText text={item.text} /></div>
            </div>
          </div>
        ))}
      </div>

      <p className='text-xs lg:text-sm text-center sm:w-[40ch] px-4 py-8 text-zinc-700 mx-auto'>
        Unlock the potential of your online presence with our responsive and interactive applications built on React, delivering a seamless experience across all devices. Plus, we specialize in creating customized solutions on WordPress, Shopify, and Webflow, perfectly tailored to meet your unique needs.
      </p>
      <Contact />
    </div>

  );
};

