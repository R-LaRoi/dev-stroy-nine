
import React from 'react'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import ServiceItem from '@/app/Components/ServiceItems'
import AwesomeIcons from '@/app/Components/AwesomeIcons'
import AnimatedText from '@/app/Components/AnimatedText'


interface TextItem {
  id: string;
  text: string;
}


export default function Services() {

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
            <AwesomeIcons />
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 text-justify py-4 text-lg font">
          <ServiceItem
            number="01"
            title="Design"
            description="Creating dynamic interfaces with key features, including user-friendly interactions, animations, and intuitive design, that together cultivate a vibrant and engaging user experience."
          />
          <ServiceItem
            number="02"
            title="Development"
            description="Unlock the potential of your online presence with our responsive and interactive applications built on React, delivering a seamless experience across all devices. Plus, we specialize in creating customized solutions on WordPress, Shopify, and Webflow, perfectly tailored to meet your unique needs."
          />
          <ServiceItem
            number="03"
            title="Custom Solution"
            description="We deliver complete website solutions that define your digital presence. Using JavaScript frameworks like React and Next.js, we build responsive, interactive applications. Our skills in API integration and optimization ensure a seamless user experience across all devices, making your web presence both functional and memorable."
          />
        </div>


        <Footer />
      </div>
    </div>
  )
}