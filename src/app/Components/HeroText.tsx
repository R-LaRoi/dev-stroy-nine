"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export default function HeroText() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showHeroText && heroTextRef.current) {
      gsap.fromTo(heroTextRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out"
        }
      );
    }
  }, [showHeroText]);

  useEffect(() => {
    const lines = gsap.utils.toArray<HTMLElement>('.hero-sub-text > div');

    lines.forEach((line, index) => {
      gsap.fromTo(line,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            once: true
          },
          delay: 0.2 * index
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {showHeroText && (
        <div className="hero-text" ref={heroTextRef}>
          STROY
        </div>
      )}

      <div>
        <div className='hero-sub-text text-center text-xl uppercase'>
          <div>Hi! I&apos;m Rachel, creative</div>
          <div>developer working </div>
          <div>with awesome people </div>
          <div>like you to create </div>
          <div>memorable web</div>
          <div> experiences that are</div>
          <div>user-friendly and</div>
          <div>designed to go places.</div>
        </div>
      </div>
    </>
  )
}
