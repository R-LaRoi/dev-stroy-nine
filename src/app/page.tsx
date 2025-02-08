'use client';
import { useState, useEffect } from 'react';
import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer"
import HeroText from "./Components/HeroText";
import RotatingCircleText from './Components/CircleText'
import Work from "./Components/Work";
import SectionMain from "./Components/SectionMain";
import MarqueeImages from "./Components/MarqueeImages";
import Services from "./Components/Services";
import LoadingPage from './Components/LoadingPage';


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
            <div className="p-5" >
              <ImageSlider />
            </div>
            <HeroText />
            <section className='relative h-[1200px] part-three'>
              <RotatingCircleText
                text="Design Beyond limits • "
                backgroundColor="#fe1034"
                textColor="black"
                rotationDuration={25}
                maxRadius={200}
              />
            </section>
            <div className="relative">
              <Work showProjects={4} />
              <SectionMain />
            </div>
            <div className="pt-32">
              <MarqueeImages />
            </div>
            <Services />
            <Footer />
          </div>
        </>) :
        (<LoadingPage />)
      }
    </>
  );
}

