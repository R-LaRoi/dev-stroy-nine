'use client'
import React from 'react'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import Work from '@/app/Components/Work'



export default function WorkPage() {
  return (
    <>
      <Header />
      <div className='pt-[100%]'>
        <Work />
      </div>
      <Footer />
    </>
  )
}