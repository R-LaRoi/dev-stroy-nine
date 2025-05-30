import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectItems } from '../Data/projectData'
import Link from 'next/link'
import ParallaxImages from './ParallaxImages';

gsap.registerPlugin(ScrollTrigger);


export default function WorkParallax() {


  return (
    <div>

      <div className="grid lg:grid-cols-2 gap-10 p-8 items-start mt-[70%]">
        {/* Left column - About us label */}
        <div>
          <p className="text-sm text-gray-500">Work</p>
        </div>

        {/* Right column - Main headline and content */}
        <div>
          <h1 className=" text-7xl">
            Let's Build Something Great

          </h1>
          <h2 className=" text-3xl py-2"> Take a look at our creative solutions and envision what we can achieve together.</h2>

        </div>
      </div>
      <section>
        <ParallaxImages />
      </section>
    </div>
  )
}
