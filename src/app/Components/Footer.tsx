'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

// Import Font Awesome components and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import { faPalette } from '@fortawesome/free-solid-svg-icons'; // Solid icons (like a palette)

export default function Footer() {
  // const footerRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  //   tl.fromTo(footerRef.current,
  //     { y: 50, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1 }
  //   );

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return (
    <footer className="h-full py-16 px-8 sm:px-12 lg:px-24 font-inter text-stone-700" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Brand Name, Description, and Social Icons */}
        <div className="flex flex-col space-y-8"> {/* Increased space between text block and social icons */}
          {/* Brand Name and Description */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold text-stone-800">STROY/</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering brands by delivering innovative web design that goes beyond aesthetics, building strategic online presences that connect and convert.
            </p>
          </div>

          {/* Social Icons - now part of the left column's content flow */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 p-2 hover:border-stone-500"
            >
              {/* Font Awesome GitHub icon */}
              <FontAwesomeIcon icon={faGithub} size="lg" /> {/* size="lg" is roughly equivalent to 20px for FA */}
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 p-2 hover:border-stone-500"
            >
              {/* Font Awesome LinkedIn icon */}
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="#art-portfolio" // Replace with your art portfolio URL
              aria-label="Art portfolio"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 p-2 hover:border-stone-500"
            >
              {/* Font Awesome Palette icon */}
              <FontAwesomeIcon icon={faPalette} size="lg" />
            </a>
          </div>
        </div>

        {/* Right Column: Utility Links */}
        <div className="flex flex-col space-y-4 md:justify-self-end"> {/* Added justify-self-end to push to right */}
          <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-600">Utility</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-base">Services</a>
            </li>
            <li>
              <a href="#work" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-base">Work</a>
            </li>
            <li>
              <a href="#contact" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-base">Contact</a>
            </li>
            <li>
              <a href="#home" className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-base">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </footer >
  );
}