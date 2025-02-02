'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

type Props = {}

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={headerRef} className=" fixed z-50 flex flex-col items-center justify-between w-full space-y md:flex-row md:space-y-0 md:space-x-4 p-4">
      <div className='uppercase text-xs'>Creative Developer</div>
      <div className='header-main uppercase'>STROY</div>
      <div className='uppercase text-xs'>New York</div>
    </div>
  );
}
