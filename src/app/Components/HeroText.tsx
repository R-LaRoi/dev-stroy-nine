"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImageSlider from "./ImageSlider";

// Define the number of repetitions for the text
const TEXT_REPETITIONS = 12;
// Define animation duration for easier modification
const SCROLL_DURATION = 40; // seconds

// Helper component to render repeating text
function ScrollingTextColumn({ text, ref }) { // Removed 'direction' as it's not used in this component's logic
  // Create enough repetitions to ensure seamless loop
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
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftTextRef.current && rightTextRef.current) {
      // Get the height of a single block of repeated text (TEXT_REPETITIONS)
      // This is crucial for a consistent loop.
      // We assume all 'scrolling-text' divs have the same height and gap.
      const singleBlockHeight = leftTextRef.current.offsetHeight / 2; // Because we duplicate 'textItems' once

      // Set initial positions
      // No longer explicitly setting y: 0 here as gsap.to/fromTo handles it
      // gsap.set(leftTextRef.current, { y: 0 });
      // gsap.set(rightTextRef.current, { y: 0 });


      // Left column - scrolling up infinitely
      gsap.to(leftTextRef.current, {
        y: -singleBlockHeight, // Animate up by the height of one block
        duration: SCROLL_DURATION,
        ease: "none",
        repeat: -1,
        overwrite: "auto", // Good practice to prevent conflicts
        onRepeat: () => {
          // This ensures the jump back to the start is seamless
          gsap.set(leftTextRef.current, { y: 0 });
        }
      });

      // Right column - scrolling down infinitely
      gsap.fromTo(rightTextRef.current,
        { y: -singleBlockHeight }, // Start from top (off-screen)
        {
          y: 0, // Move down to the starting visible position
          duration: SCROLL_DURATION,
          ease: "none",
          repeat: -1,
          overwrite: "auto",
          onRepeat: () => {
            // This ensures the jump back to the start is seamless
            gsap.set(rightTextRef.current, { y: -singleBlockHeight });
          }
        }
      );
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf([leftTextRef.current, rightTextRef.current]);
    };
  }, [SCROLL_DURATION]); // Added SCROLL_DURATION to dependency array

  return (
    <section className="relative min-h-screen overflow-hidden font-porlane">
      {/* Background Text Animations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Left Column - Scrolling Up */}
        <div className="absolute left-0 top-0 w-1/3 h-full overflow-hidden font-porlane">
          {/* Removed direction prop as it's not used by ScrollingTextColumn anymore */}
          <ScrollingTextColumn text="STROY" ref={leftTextRef} />
        </div>

        {/* Right Column - Scrolling Down */}
        <div className="absolute font-porlane right-0 top-0 w-1/3 h-full overflow-hidden">
          {/* Removed direction prop */}
          <ScrollingTextColumn text="STUDIO" ref={rightTextRef} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto h-96">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}