'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import RotatingCircleText from './CircleText';

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    if (containerRef.current) {
      gsap.from(containerRef.current, {
        duration: 1,
        opacity: 0
      });

      const hoverAnimation = gsap.to(containerRef.current, {
        scale: 2.05,
        duration: 0.3,
        paused: true,
      });

      const handleMouseEnter = () => {
        setIsHovered(true);
        hoverAnimation.play();
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
        hoverAnimation.reverse();
      };

      const element = containerRef.current;
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);



  return (
    <div
      ref={containerRef}
      className='contact relative group cursor-pointer'
    >
      <RotatingCircleText

      />

      {isHovered && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="w-48 h-48 bg-black rounded-full flex items-center justify-center ">
            <span className="text-2xl font-bold text-center leading-none text-orange-100">Let&apos;s<br />connect!</span>
          </div>
        </div>
      )}
    </div>
  );
}
