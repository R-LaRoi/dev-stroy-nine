import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    // Use Intersection Observer to check in-view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(elem.children[0], {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.5,
            ease: "power3.out"
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elem);

    // set initial state
    gsap.set(elem.children[0], { opacity: 0, y: 75 });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ width }}>
      <div>
        {children}
      </div>
    </div>
  );
}