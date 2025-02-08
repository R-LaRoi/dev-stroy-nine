import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';
import '@/app/Stylesheets/loadingpage.css';

export default function LoadingPage() {

  const circleRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circleRef.current && loadingRef.current) {
      gsap.set(circleRef.current, { scale: 0, opacity: 0 });

      const tl = gsap.timeline({
        paused: true,
      });

      tl.to(circleRef.current, {
        scale: 100,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      })
        .to(
          loadingRef.current,
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .to(
          loadingRef.current,
          {
            y: "100%",
            duration: 0.8,
          },
          "-=0.5"
        );
      setTimeout(() => {
        tl.play();
      }, 1500);
    }
  }, []);

  return (
    <div ref={loadingRef} className="loader">
      <div ref={circleRef} className="circle"></div>
      <TypeAnimation
        sequence={[
          'celebrate small wins',
          1500,
        ]}
        wrapper="h1"
        speed={50}
        repeat={0}
        cursor={false}
      />
    </div>
  );
};
