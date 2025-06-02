import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "./../assets/images/2.png",
    alt: "Person with red wall",
    className: "left-0 top-[29rem] w-60 h-60 sm:left-12 sm:top-[21rem]",
  },
  {
    src: "./../assets/images/3.png",
    alt: "Vintage tape device",
    className: "right-0 top-32 w-56 h-56 sm:right-10 sm:top-36",
  },
  {
    src: "./../assets/images/4.png",
    alt: "Person in gray outfit",
    className: "left-[8%] top-[8%] w-44 h-44 sm:left-32 sm:top-[10%]",
  },
  {
    src: "./../assets/images/5.png",
    alt: "Person in blue shirt",
    className: "right-[8%] top-[8%] w-44 h-44 sm:right-32 sm:top-[10%]",
  },
  {
    src: "./../assets/images/6.png",
    alt: "Interior shelves",
    className: "left-[28%] top-[70%] w-36 h-36",
  },
];

export const WorkFooter = ({
  spanText = "", // Default value
  h1Text = "", // Default value
  buttonText = "",
  buttonLink = "",
}) => {
  // CORRECTED LINE: Type useRef to indicate an array of HTMLDivElement or null
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imgRefs.current.forEach((img) => { // Removed `i` as it's not used here
      if (!img) return; // Ensure the ref is not null
      gsap.fromTo(
        img,
        { y: 174 },
        {
          y: -256,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Cleanup function for ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background floating images with scroll animation */}
      {images.map((image, i) => (
        <div
          key={i}
          // Corrected ref assignment: Directly assign el, TypeScript now knows imgRefs.current[i] can be HTMLDivElement | null
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          className={`absolute ${image.className} z-0 pointer-events-none`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      ))}

      {/* Static central content */}
      <div className="relative flex flex-col items-center z-10 pointer-events-auto">
        <div className="mb-6">
          <span className="block text-base md:text-lg font-normal text-[#75757B] tracking-wider text-center">
            {spanText}
          </span>
        </div>
        <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-none text-black text-center mb-8 max-w-5xl ">
          {h1Text}
        </h1>
        <div className="flex gap-4 justify-center mt-2">
          <a
            href={buttonLink}
            className="px-8 py-3 bg-black border border-black rounded-full text-lg font-normal text-white flex items-center gap-2 shadow-none transition hover:bg-neutral-900"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};