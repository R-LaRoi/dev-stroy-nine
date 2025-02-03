import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function RotatingCircleText() {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = "Design Beyond limits • ";
    const chars = text.split("");
    const deg = 360 / chars.length;

    if (circleRef.current && innerCircleRef.current) {
      circleRef.current.innerHTML = chars.map(
        (char, i) => `<span style="transform:rotate(${i * deg}deg)">${char}</span>`
      ).join("");

      // Initial text circle scroll animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(circleRef.current, {
            rotation: -self.progress * 360,
            scale: 1 - (self.progress * 0.5),
            duration: 0.5,
            ease: "none"
          });
        }
      });

      // Inner circle scale animation
      ScrollTrigger.create({
        trigger: ".next-section",
        start: "top bottom",
        onEnter: () => {
          gsap.to(innerCircleRef.current, {
            scale: 50,
            backgroundColor: "#fe1034",
            duration: 1.5,
            ease: "power2.out"
          });
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="circle-container relative">
      <div ref={circleRef} className="circle-text relative">
        <div
          ref={innerCircleRef}
          className="inner-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
    </div>
  );
}
