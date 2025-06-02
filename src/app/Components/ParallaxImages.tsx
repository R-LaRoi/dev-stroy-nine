'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Import your local images
import styleImage from "../../../public/assets/images/13.png";
import tamikaImage from "../../../public/assets/images/12.png";
import jmpnImage from "../../../public/assets/images/10.png";
import atelierImage from "../../../public/assets/images/11.png";

gsap.registerPlugin(ScrollTrigger);

const contentSlides = [
  { id: 'slide-1', imageSrc: styleImage, text: 'TAMIKA DUNCAN' },
  { id: 'slide-2', imageSrc: tamikaImage, text: 'TAMIKA DUNCAN' },
  { id: 'slide-3', imageSrc: jmpnImage, text: 'FIT DAILY' },
  { id: 'slide-4', imageSrc: atelierImage, text: 'ATELIER 718' },
];

export default function ImageChangeOnScroll() {
  const stickyImageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref to the image wrapper div
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]); // Ref to the h2 text

  useEffect(() => {
    if (!stickyImageContainerRef.current) {
      return;
    }

    const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    const texts = textRefs.current.filter(Boolean) as HTMLHeadingElement[];

    if (images.length === 0 || texts.length === 0) {
      console.warn("GSAP setup: No image or text elements found. Check refs.");
      return;
    }

    gsap.set(images, { opacity: 0, zIndex: 0 });
    gsap.set(texts, { opacity: 0, y: 20 });

    gsap.set(images[0], { opacity: 1, zIndex: 1 });
    gsap.set(texts[0], { opacity: 1, y: 0 });


    contentSlides.forEach((slide, index) => {
      const isLastSlide = index === contentSlides.length - 1;

      const triggerElement = document.getElementById(slide.id);
      if (!triggerElement) {
        console.warn(`ScrollTrigger: Trigger element with ID "${slide.id}" not found.`);
        return;
      }

      const currentImage = images[index];
      const currentText = texts[index];
      const prevImage = index > 0 ? images[index - 1] : null;
      const prevText = index > 0 ? texts[index - 1] : null;
      const nextImage = !isLastSlide ? images[index + 1] : null;
      const nextText = !isLastSlide ? texts[index + 1] : null;

      ScrollTrigger.create({
        trigger: triggerElement,
        start: 'top center',
        end: 'bottom center',

        onEnter: () => {
          gsap.to(currentImage, { opacity: 1, zIndex: 1, duration: 0.7, ease: 'power2.out' });
          gsap.to(currentText, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
          if (prevImage) {
            gsap.to(prevImage, { opacity: 0, zIndex: 0, duration: 0.7, ease: 'power2.out' });
            gsap.to(prevText, { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' });
          }
        },
        onLeave: () => {
          if (!isLastSlide) {
            gsap.to(currentImage, { opacity: 0, zIndex: 0, duration: 0.7, ease: 'power2.out' });
            gsap.to(currentText, { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' });
          }
        },
        onEnterBack: () => {
          gsap.to(currentImage, { opacity: 1, zIndex: 1, duration: 0.7, ease: 'power2.out' });
          gsap.to(currentText, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
          if (nextImage) {
            gsap.to(nextImage, { opacity: 0, zIndex: 0, duration: 0.7, ease: 'power2.out' });
            gsap.to(nextText, { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' });
          }
        },
        onLeaveBack: () => {
          if (index > 0) {
            gsap.to(currentImage, { opacity: 0, zIndex: 0, duration: 0.7, ease: 'power2.out' });
            gsap.to(currentText, { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-white min-h-[400vh]">
      {/* STICKY IMAGE AND TEXT CONTAINER - REMAINS FIXED IN VIEW */}
      <div
        ref={stickyImageContainerRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Layered Images */}
        {contentSlides.map((slide, index) => (
          <div
            key={slide.id + '-image-wrapper'}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center" // Removed padding (p-8) here
            ref={el => {
              if (el) imageRefs.current[index] = el;
            }}
            style={{ opacity: 0, zIndex: index, transform: 'translateZ(0)' }}
          >

            <div className="relative w-full h-full">
              <Image
                src={slide.imageSrc}
                alt={slide.text}
                fill
                className="object-cover" // Changed to object-cover to ensure full coverage
                sizes="100vw" // Image takes up 100% of viewport width
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        {/* Layered Text - positioned over the images */}
        {contentSlides.map((slide, index) => (
          <h2
            key={slide.id + '-text'}
            className="absolute z-20 text-white text-center text-7xl lg:text-8xl  uppercase leading-none drop-shadow-lg"
            ref={el => {
              if (el) textRefs.current[index] = el;
            }}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {slide.text}
          </h2>
        ))}
      </div>

      {/* SCROLL TRIGGER SECTIONS */}
      {contentSlides.map((slide, index) => (
        <div
          key={slide.id + '-trigger'}
          id={slide.id}
          className="h-screen flex items-center justify-center pointer-events-none"
          style={{
            backgroundColor: 'transparent',
            zIndex: -1,
          }}
        >
        </div>
      ))}
    </div>
  );
}