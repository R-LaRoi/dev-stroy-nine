'use client'
import Link from 'next/link';
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
          <Link
            href="/Pages/Work"
            className=" hover:tracking-wider hover:text-zinc-700 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            WORK
          </Link>
          <Link
            href="/Pages/Services"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/Pages/Connect"
            className="hover:tracking-wider hover:text-zinc-700 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            CONNECT
          </Link>
        </div>
      </nav>
    </header>
  );
}
