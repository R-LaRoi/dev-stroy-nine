'use client';

import Link from 'next/link';
import React, { useState } from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm ">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="logo font-porlane uppercase text-3xl text-stone-300 px-4 py-2 z-20">
          <Link
            href="/"
            className="hover:tracking-wider hover:text-stone-200 transition-all duration-300 text-3xl font-porlane text-gray-700 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            STROY
          </Link>
        </div>

        <div className="md:hidden z-20">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>


        <div
          className={`
            ${isMenuOpen ? 'flex' : 'hidden'}
            md:flex
            flex-col md:flex-row
            absolute md:static top-full left-0 right-0 md:inset-x-0 md:w-auto md:mx-auto
            bg-white md:bg-transparent
            shadow-lg md:shadow-none
            items-center md:justify-center {/* Added md:justify-center for desktop */}
            space-y-4 md:space-y-0
            space-x-0 md:space-x-12
            py-4 md:py-0
            z-10 {/* Lower z-index than logo/hamburger */}
          `}
        >
          <Link
            href="/Pages/Work"
            className=" hover:tracking-wider hover:text-zinc-700 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-black transition-colors "
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            WORK
          </Link>
          <Link
            href="/Pages/Services"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            SERVICES
          </Link>
          <Link
            href="/Pages/Connect"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            CONNECT
          </Link>

        </div>
      </nav>
    </header>
  );
}