import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RotatingCircleTextProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  rotationDuration?: number;
  maxRadius?: number;
}

export default function RotatingCircleText({
  text,
  backgroundColor,
  textColor,
  rotationDuration = 20,
  maxRadius = 150
}: RotatingCircleTextProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const chars = text.split("");
    const deg = 360 / chars.length;

    if (circleRef.current && maskRef.current) {
      circleRef.current.innerHTML = chars.map(
        (char, i) => `<span style="transform:rotate(${i * deg}deg)">${char}</span>`
      ).join("");

      gsap.to(circleRef.current, {
        rotation: 360,
        duration: rotationDuration,
        repeat: -1,
        ease: "linear"
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          gsap.to(maskRef.current, {
            attr: {
              r: self.progress * maxRadius,
              cx: 50,
              cy: 50
            },
            duration: 0.5
          });
        }
      });
    }
  }, [text, rotationDuration, maxRadius]);

  return (
    <div>
      <div ref={containerRef} className="circle-container relative w-full h-screen overflow-hidden">
        <div
          ref={circleRef}
          className="circle-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ color: textColor }}
        >
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
            r={maxRadius}
            fill={backgroundColor}
            mask="url(#circleMask)"
          />
        </svg>
      </div>
    </div>
  );
}
