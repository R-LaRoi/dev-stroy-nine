import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectItems } from '../Data/projectData'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);

interface WorkProps {
  showProjects?: number;
}

export default function Work({ showProjects }: WorkProps) {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const displayedItems = showProjects ? projectItems.slice(0, showProjects) : projectItems;

  useEffect(() => {
    revealRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: ref,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [displayedItems]);

  return (
    <div>
      <div className="next-section -mt-32">
        <h4 className="hero-sub-text text-center uppercase p-32">work</h4>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 ">
            {displayedItems.map((item, index) => (
              <li key={item.id}>
                <Link href={item.link} className="block">
                  <div
                    ref={(el: HTMLDivElement | null) => { if (el) revealRefs.current[index] = el }}
                    className="overflow-hidden"
                  >
                    <div className="aspect-w-16 h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cover-image w-full h-full object-cover lg:hero-image-inner md:hero-image-inner"
                      />
                    </div>
                    <div className="p-1 flex justify-between items-center">
                      <h4 className="text-md  ">{item.title}</h4>
                      <p className="text-sm text-white ">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className='pb-[40%]'> </div>
        </div>
      </div>
    </div>
  )
}
