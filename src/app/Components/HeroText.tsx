"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type Props = {}

export default function HeroText({ }: Props) {
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

  return (
    <>
      {showHeroText && (
        <div className="hero-text " ref={heroTextRef}>
          STROY
        </div>
      )}
    </>
  )
}
