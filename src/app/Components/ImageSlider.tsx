'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';


export default function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const images = [
    "https://github.com/user-attachments/assets/3d9eadd1-3235-41d0-a96c-32799452c6c5",
    "https://github.com/user-attachments/assets/a41507ba-d35e-429c-a892-69c30eaf3aac",
    "https://github.com/user-attachments/assets/f4f90515-a796-4b24-8ef2-d87e19d94f3d",
    "https://github.com/user-attachments/assets/bdb55176-afca-4462-bca4-0b3a4333e479",
    "https://github.com/user-attachments/assets/9dd9e888-e903-45f0-9ade-4b0f886fb691",
    "https://github.com/user-attachments/assets/09359235-9d6a-405b-bc1f-4fac5408172d"
  ];


  useEffect(() => {
    const imageElements = imagesRef.current.filter((img): img is HTMLImageElement => img !== null);

    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(imageElements, { clipPath: 'inset(0 100% 0 0)', scale: 1.5 });

    imageElements.forEach((img, index) => {
      tl.to(img, {
        clipPath: 'inset(0 0% 0 0)',
        scale: 1,
        duration: 1,
        ease: "power2.inOut"
      }, index * 2);
    });


    tl.to(imageElements[imageElements.length - 1], {
      clipPath: 'inset(0 100% 0 0)',
      scale: 1.5,
      duration: 1,
      ease: "power2.inOut"
    }, `>-1`);

    return () => {
      tl.kill();
    };
  }, []);

  return (

    <div ref={sliderRef} className="hero-image-inner relative overflow-hidden mt-[25%] ">
      {images.map((src, index) => (
        <div key={index} className={`hero-mask-${index + 1} absolute top-0 left-0 w-full h-full`}>
          <div className={`hero-image-${index + 1} w-full h-full`}>
            <Image
              ref={(el) => {
                imagesRef.current[index] = el as HTMLImageElement;
              }}
              src={src}
              alt={`Hero ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};


