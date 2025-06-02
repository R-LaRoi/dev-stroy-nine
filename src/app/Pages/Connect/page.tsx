'use client'
import React from 'react'
import CircleText from '@/app/Components/CircleText'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import FormConnect from '@/app/Components/FormConnect'


export default function Connect() {
  return (
    <>
      <Header />


      <div>
        <>
          <CircleText />

        </>
      </div>

      <div className="flex flex-col items-center p-4 md:p-[8.5rem] ">
        <div className="w-full max-w-3xl text-center">
          <div className="mt-4 md:mt-0 p-7">
            <p className="text-3xl sm:text-4xl md:text-6xl leading-tight hero-sub-text text-[#171717]">
              Ready to transform your digital presence?
            </p>

            <h4 className="text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed py-2  text-[#292929]">
              I&apos;m always happy to help—drop us a line and let&apos;s get started.
            </h4>
            <hr className="my-2 md:my-4" style={{ borderTop: '1px solid black' }} />
          </div>

          <div className='section-form'>
            <div className="mt-4 md:mt-[20%] ">
              <FormConnect />
            </div>
          </div>
        </div>

        <div className="mt-[40%] p-8 text-xs text-center">
          <div className='mb-4'>
            <small>STROY</small>
            <div>rachel@stroy.dev</div>
          </div>
          <div className='mb-4'>
            <small>NEW YORK</small>

          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}