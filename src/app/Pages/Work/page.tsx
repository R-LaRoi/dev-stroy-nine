'use client'
import React from 'react'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import Work from '@/app/Components/Work'

export default function WorkPage() {
  return (
    <div className="relative min-h-screen">

      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        >
          <source
            src="https://github.com/user-attachments/assets/2063082f-62d8-436c-b586-3592adf7ab0a"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10">
        <Header />
        <div className="pt-[170%]">
          <Work />
        </div>
        <Footer />
      </div>
    </div>
  )
}
