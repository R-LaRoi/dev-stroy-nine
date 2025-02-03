import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function RotatingCircleText() {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = "Design Beyond limits • ";
    const chars = text.split("");
    const deg = 360 / chars.length;

    if (circleRef.current) {
      circleRef.current.innerHTML = chars.map(
        (char, i) => `<span style="transform:rotate(${i * deg}deg)">${char}</span>`
      ).join("");

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (circleRef.current) {
            // Rotate based on scroll progress
            gsap.to(circleRef.current, {
              rotation: -self.progress * 360,
              scale: 1 - (self.progress * 0.5), // Scale down gradually
              duration: 0.5,
              ease: "none"
            });
          }
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="circle-container">
      <div ref={circleRef} className="circle-text"></div>
    </div>
  );
}
