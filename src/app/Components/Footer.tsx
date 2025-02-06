'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

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
    <footer ref={footerRef} className="fixed bottom-0 left-0 right-0 p-4 text-[15px] uppercase font-bold">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-1">
          <Link
            href="mailto:rachel@stroy.dev"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300"
          >
            email
          </Link>
          <Link
            href="https://www.linkedin.com/in/rachel-onali-a9b515342"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300"
          >
            linkedin
          </Link>
          <Link
            href="https://rachelstroy.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:tracking-wider hover:text-zinc-700 transition-all duration-300"
          >
            _studio
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            href="/work"
            className=" hover:tracking-wider hover:text-zinc-700 transition-all duration-300"
          >
            WORK
          </Link>
          <Link
            href="/services"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300"
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300"
          >
            CONTACT
          </Link>
        </div>

      </div>
    </footer>
  );
}
