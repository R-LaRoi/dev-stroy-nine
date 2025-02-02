import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer"
export default function Home() {
  return (
    <>
      <Header />
      <div className="pb-[5%]"></div>
      <div className="p-5">
        <ImageSlider />
      </div>
      <div className="hero-text -translate-y-[10%]">
        <div>STROY</div>
      </div>
      <Footer />
    </>
  );
}
