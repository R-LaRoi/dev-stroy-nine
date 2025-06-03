'use client'
import Image from "next/image";
import albumImg from '../../../public/assets/images/14.png'
import { Reveal } from './Reveal';

export default function Mission() {

  const stats = [
    {
      number: "01",
      description: "Beyond ranking for keywords, truly optimized web design means your site can adapt and grow with future algorithm changes, establishing a durable online presence that continuously attracts your ideal audience."
    },
    {
      number: "02",
      description: "Your digital brand is far more than just looking good. It's about building emotional connection and enduring loyalty. I create online experiences designed to leave a powerful mark, cultivating genuine relationships that keep your audience returning."
    },
    {
      number: "03",
      description: "Every design decision is rooted in understanding human behavior. I implement proven UX patterns and conduct iterative feedback loops to ensure your site isn't just navigable, but delightfully intuitive, leading to higher retention and conversion rates."
    }
  ];

  return (
    <>
      <section className="py-34 bg-white mt-[20%]">
        <div className="max-w-7xl mx-auto p-12">

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-32">

            <Reveal>
              <div>
                <p className="text-sm text-gray-500">Mission</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="mb-12 text-7xl">
                  Empowering Brands Through Innovative Web Design
                </h2>
                {/* Two column text below headline */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Define and build your digital presence. I work with awesome people like you to create memorable web experiences that are user-friendly and designed to go places.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Always working to transform your initial vision into a powerful, market-ready digital reality, ensuring every detail fuels impactful results.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Statistics section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-[20%]">
            {/* Single collage image column */}
            <Reveal>
              <div className="relative">
                <Image
                  src={albumImg}
                  alt="Collage of projects"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
            {/* Stats column */}
            <div className="space-y-12">
              {stats.map((stat, index) => (
                <Reveal key={index}>
                  <div className="flex items-start gap-10">
                    <div className="text-6xl lg:text-6xl font-normal text-black flex-shrink-0">{stat.number}</div>
                    <p className="text-gray-700 text-lg leading-relaxed">{stat.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}