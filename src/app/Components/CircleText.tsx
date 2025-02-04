import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function RotatingCircleText({ isDarkMode = false }) {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = "Design Beyond limits • ";
    const chars = text.split("");
    const deg = 360 / chars.length;

    if (circleRef.current && maskRef.current) {

      circleRef.current.innerHTML = chars.map(
        (char, i) => `<span style="transform:rotate(${i * deg}deg)">${char}</span>`
      ).join("");

      // Continuous text rotation
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

      // Circle scaling on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          // Dynamically scale the circle
          gsap.to(maskRef.current, {
            attr: {
              r: self.progress * 150, // Scales from 0 to 150
              cx: 50,
              cy: 50
            },
            duration: 0.5
          });
        }
      });
    }
  }, []);


  return (

    <div>
      <div ref={containerRef} className="circle-container relative w-full h-screen overflow-hidden">
        <div ref={circleRef} className="circle-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        </div>

        <svg
          className="mask fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
          viewBox="0 0 100 100"
        >
          <defs>
            <mask id="circleMask">
              <circle
                cx="50"
                cy="50"
                r="0"
                fill="white"
                ref={maskRef}
              />
            </mask>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="150"
            className={isDarkMode ? 'fill-[#f4e887]' : 'fill-[#fe1034]'}
            mask="url(#circleMask)"
          />
        </svg>


      </div>
    </div>
  );
}
