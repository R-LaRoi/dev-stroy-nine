import React from 'react'
import Image from 'next/image';
import '../Stylesheets/marquee.css'
import MarqueeText from './MarqueeText';



const rowOne = [
  "https://github.com/user-attachments/assets/e0481bf5-9161-4324-a8e7-a6b0a27e9cd6",
  "https://github.com/user-attachments/assets/3f44759e-8cd9-4085-a982-a3f027237617",
  "https://github.com/user-attachments/assets/0b7f1c26-3682-4d8c-bcaf-2debb3b205e5",
  "https://github.com/user-attachments/assets/2f0b5fc8-d787-475f-874a-36a0301408d4",
  "https://github.com/user-attachments/assets/a15de092-f53d-4654-807e-8e1608755e2b",
  "https://github.com/user-attachments/assets/c002e817-624f-4ae9-8dd6-308c2447e683",
  "https://github.com/user-attachments/assets/789397b4-ba67-4c05-8139-ac3ab62f5a67"
]


export default function MarqueeImages() {
  return (
    <div className="container-gallery">
      <div className="row row-1" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        {rowOne.map((src, index) => (
          <div key={index} className="flex-col">
            <div className="horizontal-single-item">
              <div className="overlay">
                <Image src={src} alt={`Item ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
        <MarqueeText>WEBFLOW SQUARESPACE SHOPIFY WORDPRESS DESIGN & DEVELOP WEBFLOW SQUARESPACE SHOPIFY WORDPRESS DESIGN & DEVELOP</MarqueeText>
      </div>
    </div>
  )
}