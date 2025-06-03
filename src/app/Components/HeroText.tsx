"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImageSlider from "./ImageSlider";

const TEXT_REPETITIONS = 12;
const SCROLL_DURATION = 40;

function ScrollingTextColumn({ text, ref }: { text: string; ref: React.RefObject<HTMLDivElement | null> }) {
  const textItems = Array.from({ length: TEXT_REPETITIONS }, (_, i) => (
    <div className="scrolling-text text-stone-100 text-8xl leading-none" key={i}>
      {text}
    </div>
  ));

  return (
    <div
      ref={ref}
      className="flex flex-col text-stone-100 whitespace-nowrap"
    >
      {textItems}
      {textItems}
    </div>
  );
}

export default function HeroText() {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    if (leftTextRef.current && rightTextRef.current) {
      const singleBlockHeight = (leftTextRef.current as HTMLDivElement).offsetHeight / 2;

      gsap.to(leftTextRef.current, {
        y: -singleBlockHeight,
        duration: SCROLL_DURATION,
        ease: "none",
        repeat: -1,
        overwrite: "auto",
        onRepeat: () => {
          gsap.set(leftTextRef.current, { y: 0 });
        }
      });

      gsap.fromTo(rightTextRef.current,
        { y: -singleBlockHeight },
        {
          y: 0,
          duration: SCROLL_DURATION,
          ease: "none",
          repeat: -1,
          overwrite: "auto",
          onRepeat: () => {
            gsap.set(rightTextRef.current, { y: -singleBlockHeight });
          }
        }
      );
    }

    return () => {
      gsap.killTweensOf([leftTextRef.current, rightTextRef.current]);
    };
  }, [SCROLL_DURATION]);

  return (
    <section className="relative min-h-screen overflow-hidden font-porlane">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-0 w-1/3 h-full overflow-hidden font-porlane">
          <ScrollingTextColumn text="STROY" ref={leftTextRef} />
        </div>

        <div className="absolute font-porlane right-0 top-0 w-1/3 h-full overflow-hidden">
          <ScrollingTextColumn text="STUDIO" ref={rightTextRef} />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto h-96">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}