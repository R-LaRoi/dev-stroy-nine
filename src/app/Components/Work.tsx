import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectItems } from '../Data/projectData'
import { WorkFooter } from './WorkFooter';
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);

// Marquee Component
const Marquee = ({ text, speed = 0.5 }: { text: string, speed?: number }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current as HTMLElement | null;
    if (!marqueeElement) return;

    // Duplicate the content to create a seamless loop
    const content = marqueeElement.children[0] as HTMLElement;
    const duplicatedContent = content.cloneNode(true);
    marqueeElement.appendChild(duplicatedContent);

    gsap.to(marqueeElement, {
      x: `-=${content.offsetWidth}`, // Animate by the width of the original content
      ease: "none",
      duration: content.offsetWidth / 100 * speed, // Adjust speed based on content width
      repeat: -1,
      onRepeat: () => {
        gsap.set(marqueeElement, { x: 0 }); // Reset position when loop restarts
      },
    });

  }, [text, speed]);

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap py-8 sm:py-12 md:py-16 lg:pt-[20%] lg:pb-[10%] pointer-events-none ">
      <div ref={marqueeRef} className="inline-block" style={{
        paddingTop: "10vh",
        paddingBottom: "4vw",
      }}>

        <span className="text-[25vw]  text-stone-100 uppercase mx-12  select-none font-porlane leading-tight ">
          {text}
        </span>

      </div>
    </div>
  );
};


interface WorkProps {
  showProjects?: number;
}

export default function Work({ showProjects }: WorkProps) {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const displayedItems = showProjects ? projectItems.slice(0, showProjects) : projectItems;

  useEffect(() => {
    revealRefs.current.forEach((ref) => {
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
      <div>

        <div className="next-section -mt-32">
          <Marquee text=" Design Beyond Limits  Design Beyond Limits " speed={1} />
          <div className="px-12">
            <div className="max-w-5xl mx-auto border-b border-stone-200"></div>
          </div>
          <div className="p-8 pb-32">
            <p className="text-md text-black mb-6">Work</p>
            <div className="flex justify-between items-end">
              <h1 className=" text-5xl p-16 leading-none md:text-5xl md:leading-tight lg:text-[6vw] lg:leading-none  max-w-5xl ">
                From Concept To <br /> Impactful User <br />Experiences.

              </h1>
              <div className="hidden md:flex items-center text-blue-500 cursor-pointer hover:text-blue-400 transition-colors">
                <span className="mr-2 text-lg">Dive Into Work</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
                  <path d="M12 19V5M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 max-w-6xl mx-auto">
            {displayedItems.map((item, index) => (
              <li key={item.id}>
                <Link href={item.link} className="block">
                  <div
                    ref={(el: HTMLDivElement | null) => { if (el) revealRefs.current[index] = el }}
                    className="overflow-hidden group"
                  >
                    {/* Consistent aspect ratio for all items */}
                    <div className="relative overflow-hidden aspect-[4/3] ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                      />
                    </div>
                    <div className="pt-4 pb-8 flex justify-between items-start">
                      <h4 className="text-lg font-medium text-stone-900">{item.title}</h4>
                      <p className="text-sm text-black max-w-[60%] text-right leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className='pb-[40%]'></div>
          <WorkFooter
            spanText="DISCOVER OUR SERVICES"
            h1Text="Explore how we can bring your ideas to life."
            buttonText="View Services"
            buttonLink="./Services"
          />
        </div>
      </div>
    </div>
  )
}