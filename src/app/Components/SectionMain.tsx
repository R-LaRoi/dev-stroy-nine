import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AwesomeIcons from './AwesomeIcons';

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
    <div ref={sectionRef} className='h-screen relative z-10 '>
      <div className='pb-32'>
        <h1 className='hero-sub-text text-center uppercase'>
          Empowering Brands through Innovative Web Design
        </h1>
      </div>
      <div className='relative flex flex-col sm:flex-row items-center justify-center brand px-4 py-16 md:px-8  overflow-hidden'>
        <div className="w-25 sm:w-[76%] max-w-5xl mx-2 sm:mx-4 ">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-auto sm:w-[70%] ml-[15%] mb-video"
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
      <h1 className='text-3xl font-bold uppercase text-center p-16'>Define and build your digital presence.</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center h-auto  space-y-4 sm:space-y-0 py-16  ">

        <div className="text-xs lg:text-sm text-justify w-75 sm:w-[40ch] px-4 text-zinc-700">
          <div>
            In an era defined by rapid technological advancement, I am committed to reshaping the digital landscape through innovative web UI design and development. With a background as both an artist and a developer, I navigate the complexities of starting from scratch, understanding that the initial phase of any project—sourcing essential tools and building valuable relationships—often presents the greatest challenges.
          </div>

        </div>
        <div className="text-xs lg:text-sm text-justify w-75 sm:w-[40ch] px-4 text-zinc-700">
          Through my experience, I have discovered that the development process is rich with opportunities for growth and innovation. I focus on transforming complex design challenges into intuitive, user-friendly solutions, demonstrating that technology can be both functional and visually engaging.
        </div>

        <div>
        </div>

      </div>
      <div className="flex items-left justify-center space-x-4 mb-4 md:space-x-6 md:mb-8 py-16">
        <AwesomeIcons />
      </div>

    </div >
  )
}