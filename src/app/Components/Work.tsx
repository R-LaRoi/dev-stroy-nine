import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectItems } from '../Data/projectData'
import Link from 'next/link'
import RotatingCircleText from './CircleText';


gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const revealRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    revealRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ref,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);


  return (
    <div ref={sectionRef}>
      <div className="next-section -mt-14">
        <h4 className="uppercase text-center relative top-1/4 title t-mobile p-[20%]">
          <div>curated</div> work</h4>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 ">
            {projectItems.map((item, index) => (
              <li
                key={item.id}
                value={index}
              >
                <Link href={item.link} className="block ">
                  <div
                    ref={(el) => {
                      if (revealRefs.current) {
                        revealRefs.current[index] = el;
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="aspect-w-16 h-full ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cover-image w-full h-full object-cover lg:hero-image-inner  md:hero-image-inner"
                      />
                    </div>
                    <div className="p-2 flex justify-between items-center">
                      <h4 className="text-xl uppercase font-semibold t">{item.title}</h4>
                      <p className="text-sm text-gray-600 ">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  )
}
