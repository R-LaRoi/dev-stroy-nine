'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className="fixed bottom-0 left-0 right-0  p-4 text-[10px] uppercase">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>email</div>
          <div>number</div>
          <div>get in touch</div>
        </div>
        <div className="flex flex-col">
          <div>linkedin</div>
          <div>extra</div>
          <div>extra</div>
        </div>
      </div>
    </footer>
  );
}
