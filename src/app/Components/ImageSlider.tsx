'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ImageSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const images = [
    "https://github.com/user-attachments/assets/f7597525-bc4a-4089-9110-2c7d3023e2c8",
    "https://github.com/user-attachments/assets/c4154b4b-0159-45b5-925b-067948a99c78",
    "https://github.com/user-attachments/assets/928dd12a-5f89-495c-aef7-b574419f6b1c",
    "https://github.com/user-attachments/assets/c6415b4a-89fb-432d-a501-fcf63582f8c9",
    "https://github.com/user-attachments/assets/47a09242-1ae7-4f6e-b1cc-60ff5107cb9c",
    "https://github.com/user-attachments/assets/e68635f7-efc4-4fbc-9def-3eb236b660a7",
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
            <img
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              src={src}
              alt={`Hero ${index + 1}`}
              className="cover-image w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
