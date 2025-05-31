import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectItems } from '../Data/projectData'
import Link from 'next/link'
import ParallaxImages from './ParallaxImages';

gsap.registerPlugin(ScrollTrigger);

export default function WorkParallax() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      }
    });

    if (leftRef.current) {
      gsap.set(leftRef.current, { opacity: 0, y: 75 });
      tl.to(leftRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out"
      }, 0);
    }

    if (rightRef.current) {
      gsap.set(rightRef.current, { opacity: 0, y: 75 });
      tl.to(rightRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out"
      }, 0.2);
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="grid lg:grid-cols-2 gap-10 p-8 items-start mt-[70%]">
        {/* Left column - About us label */}
        <div ref={leftRef}>
          <p className="text-sm text-gray-500">Work</p>
        </div>

        {/* Right column - Main headline and content */}
        <div ref={rightRef}>
          <h1 className=" text-7xl">
            Let's Build Something Great
          </h1>
          <h2 className=" text-3xl py-2"> Take a look at our creative solutions and envision what we can achieve together.</h2>
        </div>
      </div>
      <section>
        <ParallaxImages />
      </section>
    </div>
  )
}