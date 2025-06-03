'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';


export default function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const images = [
    "https://res.cloudinary.com/dyczhwkws/image/upload/v1748923186/16_grxleu.png",
    "https://res.cloudinary.com/dyczhwkws/image/upload/v1748923187/19_k270l9.png",
    "https://res.cloudinary.com/dyczhwkws/image/upload/v1748923186/17_xgdkyj.png",
    "https://res.cloudinary.com/dyczhwkws/image/upload/v1748923187/20_geeukj.png",


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


