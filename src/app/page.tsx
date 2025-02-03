"use client"
import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer"
import HeroText from "./Components/HeroText";
import RotatingCircleText from "./Components/CircleText";
export default function Home() {
  return (
    <>
      <Header />
      <div className="pb-[5%]"></div>
      <div className="p-5">
        <ImageSlider />
      </div>
      <HeroText />

      <section className="part-three">
        <div className="p-5">
          <RotatingCircleText />
        </div>
        <div className="circle-color-2"></div>
      </section>
      <Footer />
    </>
  );
}
