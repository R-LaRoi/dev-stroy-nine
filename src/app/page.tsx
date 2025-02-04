"use client"
import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer"
import HeroText from "./Components/HeroText";
import RotatingCircleText from "./Components/CircleText";
import Work from "./Components/Work";
export default function Home() {
  return (
    <>
      <Header />
      <div >
        <div className="pb-[5%]"></div>
        <div className="p-5" >
          <ImageSlider />
        </div>
        <HeroText />

        <section className='relative h-[1200px] part-three'
        >

          <RotatingCircleText />


        </section>
        <Work />
        <Footer />
      </div>
    </>
  );
}
