import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer"
import HeroText from "./Components/HeroText";
export default function Home() {
  return (
    <>
      <Header />
      <div className="pb-[5%]"></div>
      <div className="p-5">
        <ImageSlider />
      </div>
      <HeroText />
      <Footer />
    </>
  );
}
