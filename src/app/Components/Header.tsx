'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';



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
    <div ref={headerRef} className=" fixed z-50 flex flex-col items-center justify-between w-full space-y md:flex-row md:space-y-0 md:space-x-4 p-4 font-bold">
      <div className='uppercase text-xs'>Creative Developer</div>
      <Link href="/" className="header-main uppercase text-2xl hover:text-gray-500 transition-colors duration-300">
        STROY
      </Link>
      <div className='uppercase text-xs'>New York</div>
    </div>
  );
}
