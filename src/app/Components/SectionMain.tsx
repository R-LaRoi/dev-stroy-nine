import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionMain() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className='h-screen relative z-10'>
      <div className=''>
        <h1 className='text-3xl text-center w-full max-w-2xl mx-auto px-3 title t-mobile '>
          Empowering Brands through Innovative Web Design
        </h1>
      </div>
      <div className='relative flex flex-col sm:flex-row items-center justify-center brand px-4 py-16 md:px-8  overflow-hidden'>
        <div className="w-full sm:w-[80%] max-w-5xl mx-2 sm:mx-4 ">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="w-75 "
            id="jmp"
          >
            <source
              src="https://github.com/user-attachments/assets/988ac573-1235-4622-960b-c4574b84cce2"
              type="video/mp4"
            />
          </video>
        </div>
        <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl uppercase font-bold whitespace-nowrap z-10 text-white'>TAMIKA</div>
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl uppercase font-bold whitespace-nowrap z-10 text-white'>DUNCAN</div>
      </div>
      <div className=' text-center p-4 text-lg lg:text-3xl'>
        <div>We're here to transform complexity into user-friendly solutions that drive engagement and fuel growth for your brand.</div>
        <div>Every project is a canvas for innovation, pushing boundaries with an unwavering commitment to excellence.</div>
      </div>
    </div>
  )
}