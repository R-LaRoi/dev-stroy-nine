import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './Contact';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import albumTwo from '../../../public/assets/images/16.png'; // Adjust the path as necessary
gsap.registerPlugin(ScrollTrigger);

interface TextItem {
  id: string;
  text: string;
}

export default function Services() {
  const textItems: TextItem[] = [
    { id: '02', text: 'Branding' },
    { id: '03', text: 'Web Design' },
    { id: '04', text: 'Development' },
    { id: '01', text: 'Collaboration' },
  ];


  return (
    <div>
      <div className="mt-[30%] text-center">
        <div className="title text-[9vw] uppercase font-bold">
          {textItems.map((item) => (
            <div key={item.id} className={`_${item.id}`}>
              <div className="tracking-[-0.05em] leading-none">
                <div className="gradient-text">        <AnimatedText text={item.text} /></div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div>
        <Image
          src={albumTwo}
          alt="Collage of projects"
          className="w-full h-auto rounded-lg shadow-lg"
          width={600}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
      <section className="py-24 bg-white"> {/* Adjust padding/background as needed */}
        <div className="max-w-7xl mx-auto px-6"> {/* Max width and horizontal padding for content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              {/* Main Heading and Arrow */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-5xl text-black">
                  Services
                </h2>
                {/* Arrow icon - Using a simple SVG for demonstration */}
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
              {/* Descriptive Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Starting a project from scratch can feel daunting; I understand that, thanks to my background as both an artist and a developer. I know the initial hurdles of gathering resources and forming key relationships. But through every experience, I've seen that the development journey is rarely linear; it's a vibrant path where growth and innovation consistently emerge.
              </p>
            </div>

            {/* Right Column - List of Items */}
            <div>
              <ul className="space-y-6"> {/* Adjust spacing between list items */}
                <li className="border-b border-gray-200 pb-2 text-lg text-black">Custom Web Development</li>
                <li className="border-b border-gray-200 pb-2 text-lg text-black">Digital Brand Presence</li>
                <li className="border-b border-gray-200 pb-2 text-lg text-black">User Experience (UX) Optimization</li>
                <li className="border-b border-gray-200 pb-2 text-lg text-black">End to End Project Guidance</li>
                <li className="border-b border-gray-200 pb-2 text-lg text-black">Ongoing Support & Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>




    </div>

  );
};

