'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';


export default function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const images = [
    "https://github.com/user-attachments/assets/e0481bf5-9161-4324-a8e7-a6b0a27e9cd6",
    "https://github.com/user-attachments/assets/3f44759e-8cd9-4085-a982-a3f027237617",
    "https://github.com/user-attachments/assets/0b7f1c26-3682-4d8c-bcaf-2debb3b205e5",
    "https://github.com/user-attachments/assets/2f0b5fc8-d787-475f-874a-36a0301408d4",
    "https://github.com/user-attachments/assets/a15de092-f53d-4654-807e-8e1608755e2b",
    "https://github.com/user-attachments/assets/c002e817-624f-4ae9-8dd6-308c2447e683",
    "https://github.com/user-attachments/assets/789397b4-ba67-4c05-8139-ac3ab62f5a67",
    "https://github.com/user-attachments/assets/09359235-9d6a-405b-bc1f-4fac5408172d"
  ];


  useEffect(() => {
    const imageElements = imagesRef.current.filter((img): img is HTMLImageElement => img !== null);

    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(imageElements, { clipPath: 'inset(0 100% 0 0)', scale: 1.5 });

    tl.delay(2);


    imageElements.forEach((img, index) => {
      tl.to(img, {
        clipPath: 'inset(0 0% 0 0)',
        scale: 1,
        duration: .8,
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
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};


