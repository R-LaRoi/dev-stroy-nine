'use client'
import React, { useRef, useEffect } from 'react';



export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold tracking-tight text-black">
            STROY
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Services
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Work
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            About
          </a>

        </div>

      </nav>
    </header>
  );
}
