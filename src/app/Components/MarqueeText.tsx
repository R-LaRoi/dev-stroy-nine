import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MarqueeTextProps {
  children: ReactNode;
  duration?: number;
}

export default function MarqueeText({ children, duration = 45 }: MarqueeTextProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;

      gsap.to(marquee, {
        xPercent: -100,
        duration: duration,
        ease: "none",
        repeat: -1,
      });
    }
  }, [duration]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={marqueeRef} className="whitespace-nowrap inline-block marquee-text">
        {children}
      </div>
    </div>
  );
}
