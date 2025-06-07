'use client';
import { useRef, useEffect } from 'react'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import AnimatedText from '@/app/Components/AnimatedText'
import gsap from 'gsap';
import { WorkFooter } from '@/app/Components/WorkFooter';
interface TextItem {
  id: string;
  text: string;
}




export default function Services() {

  const titleRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.set(titleRef.current.children, { opacity: 0, y: 75 });
      gsap.to(titleRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }

    if (imageRef.current) {
      gsap.set(imageRef.current, { opacity: 0, y: 75 });
      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }

    if (sectionRef.current) {
      gsap.set(sectionRef.current, { opacity: 0, y: 75 });
      gsap.to(sectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }
  }, []);

  const textItems: TextItem[] = [
    { id: '02', text: ' BUILD YOUR' },
    { id: '04', text: 'DIGital Presence' },

  ];

  return (
    <div>
      <Header />

      <div className="pb-[5rem]">
        <section className="title text-[9vw] uppercase font-bold">
          <div className='p-32'></div>

          <div className="max-w-5xl mx-auto">
            <div className='title text-[9vw] uppercase text-center'>   {textItems.map((item) => (
              <div key={item.id} className={`_${item.id}`}>
                <div className="tracking-[-0.05em] leading-none ">
                  <AnimatedText text={item.text} />
                </div>
              </div>
            ))}
            </div>
            <video playsInline autoPlay muted loop className="md:order-2 def-video p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32" >
              <source
                src="https://github.com/user-attachments/assets/43b9c48b-f119-44f6-a890-19c6e135db95"
                type="video/mp4"
              />

            </video>

          </div>

        </section>

        <div ref={imageRef}>

        </div>
        <section className="py-24 bg-white" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>

                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-5xl text-black">
                    Services
                  </h2>

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

                <p className="text-lg text-gray-700 leading-relaxed">
                  Starting a project from scratch can feel daunting; I understand that, thanks to my background as both an artist and a developer. I know the initial hurdles of gathering resources and forming key relationships. But through every experience, I've seen that the development journey is rarely linear; it's a vibrant path where growth and innovation consistently emerge.
                </p>
              </div>


              <div>
                <ul className="space-y-6">
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
        <video playsInline autoPlay muted loop className="md:order-2 def-video p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32" >
          <source
            src="/assets/videos/tamv1.mp4"
            type="video/mp4"
          />

        </video>
        <WorkFooter
          spanText="ACCELERATE YOUR VISION"
          h1Text="Ready to move from concept to impact? "
          buttonText="Let's connect."
          buttonLink="Pages/connect"
        />
        <Footer />
      </div>
    </div>
  )
}