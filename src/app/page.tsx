'use client';
import { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import HeroText from "./Components/HeroText";

import Services from "./Components/Services";
import LoadingPage from './Components/LoadingPage';
import Mission from './Components/Mission';
import WorkParallax from './Components/WorkParallax';
import Connect from './Pages/Connect/page';

import MarqueeConnect from './Components/MarqueeConnect';

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])


  return (
    <>
      {loading === false ? (
        <>
          <Header />
          <div>
            <div className="pb-[5%]"></div>
            <HeroText />
            <section className='relative h-[1200px] part-three'>
              <Mission />
            </section>
            <div className="relative mt-20 z-10">
              <WorkParallax />

              {/* <Work showProjects={4} /> */}
              {/* <SectionMain /> */}
            </div>


            <Services />
            <div className="pt-32 mt-[10%]">
              <MarqueeConnect />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </>) :
        (<LoadingPage />)
      }
    </>
  );
}

