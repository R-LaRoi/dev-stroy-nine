import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './Contact';
gsap.registerPlugin(ScrollTrigger);

interface TextItem {
  id: string;
  text: string;
}

const Services: React.FC = () => {
  const textItems: TextItem[] = [
    { id: '02', text: 'branding' },
    { id: '03', text: 'design' },
    { id: '04', text: 'Development' },
    { id: '01', text: 'Collaboration' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const textElements = containerRef.current.querySelectorAll('.gradient-text');

      textElements.forEach((text) => {
        gsap.to(text, {
          color: 'rgba(0, 0, 0, 0.3)',
          opacity: 1,
          backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 1) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="mt-[30%] text-center">
      <div className="title text-[5vw] uppercase font-bold">
        {textItems.map((item) => (
          <div key={item.id} className={`_${item.id}`}>
            <div className="tracking-[-0.05em] leading-none">
              <div className="gradient-text">{item.text}</div>
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

export default Services;
