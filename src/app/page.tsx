'use client';
import { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import HeroText from "./Components/HeroText";
import Services from "./Components/Services";
import LoadingPage from './Components/LoadingPage';
import Mission from './Components/Mission';
import WorkParallax from './Components/WorkParallax';
import Version from './Components/versiontwo';
import { WorkFooter } from './Components/WorkFooter';


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
            </div>

            <Services />
            <WorkFooter
              spanText="Define and build your digital presence."
              h1Text=" Helping you to focus on transforming complex design challenges into intuitive, user-friendly solutions."

            />

            <div className="pt-32 mt-[10%]">
              <Version />

            </div>

          </div>
          <div>

          </div>
        </>) :
        (<LoadingPage />)
      }
    </>
  );
}

