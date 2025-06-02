import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeHeroSection() {
  const marqueeSectionRef = useRef(null);
  const marqueeLine1Ref = useRef(null);
  const marqueeLine2Ref = useRef(null);
  const videoSectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const marqueeSection = marqueeSectionRef.current;
    const line1 = marqueeLine1Ref.current;
    const line2 = marqueeLine2Ref.current;


    gsap.to(line1, {
      x: () => `-${(line1 as unknown as HTMLElement).scrollWidth / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: marqueeSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.fromTo(line2,
      { x: () => `-${(line2 as unknown as HTMLElement).scrollWidth / 2}px` },
      {
        x: () => `0px`,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeSection,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    const videoSection = videoSectionRef.current;
    const videoWrapper = videoWrapperRef.current;
    const overlay = overlayRef.current;

    // Initial: relative, centered, small
    gsap.set(videoWrapper, {
      position: "relative",
      left: "50%",
      top: "0",
      xPercent: -50,
      yPercent: 0,
      width: "44vw",
      height: "28vw",
      zIndex: 1,
    });
    gsap.set(overlay, { opacity: 0 });

    // Improved video animation with smoother transitions
    ScrollTrigger.create({
      trigger: videoSection,
      start: "top center",
      end: "bottom top",
      scrub: 1,
      pin: false,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0) {
          gsap.to(videoWrapper, {
            position: "relative",
            left: "50%",
            top: "0",
            xPercent: -50,
            yPercent: 0,
            width: "44vw",
            height: "28vw",
            zIndex: 1,
            duration: 0.1,
            ease: "none"
          });
        } else if (progress > 0 && progress < 1) {

          const widthProgress = 44 + 56 * progress;
          const heightProgress = 28 + 44 * progress;

          gsap.to(videoWrapper, {
            position: "fixed",
            left: "50vw",
            top: "50vh",
            xPercent: -50,
            yPercent: -50,
            width: `${widthProgress}vw`,
            height: `${heightProgress}vw`,
            zIndex: 30,
            duration: 0.1,
            ease: "none"
          });
        } else if (progress >= 1) {
          gsap.to(videoWrapper, {
            position: "relative",
            left: "50%",
            top: "0",
            xPercent: -50,
            yPercent: 0,
            width: "100vw",
            height: "72vw",
            zIndex: 1,
            duration: 0.1,
            ease: "none"
          });
        }

        // Smoother overlay transition
        const overlayOpacity = progress > 0.6 ? Math.min(1, (progress - 0.6) / 0.4) : 0;
        gsap.to(overlay, {
          opacity: overlayOpacity,
          duration: 0.2,
          ease: "power2.out"
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([line1, line2, videoWrapper, overlay]);
    };
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden ">
      {/* Marquee */}
      <div
        ref={marqueeSectionRef}
        className="w-full"
        style={{
          paddingTop: "30vh",
          paddingBottom: "4vw",
        }}
      >
        {/* Line 1 (scrolls left) */}
        <div
          ref={marqueeLine1Ref}
          className="font-sans text-black"
          style={{
            fontSize: "12vw",
            lineHeight: 1,
            whiteSpace: "nowrap",
            marginBottom: "0vw",
            paddingLeft: 0,
            paddingRight: 0,
            willChange: "transform",
          }}
        >
          <span style={{ marginRight: "4vw" }}>Transforming Iconic Ideas</span>
          <span style={{ marginRight: "4vw" }}>Transforming Iconic Ideas</span>
        </div>
        {/* Line 2 (scrolls right) */}
        <div
          ref={marqueeLine2Ref}
          className="text-black"
          style={{
            fontSize: "12vw",
            lineHeight: 1,
            whiteSpace: "nowrap",
            marginTop: "-0.5vw",
            paddingLeft: 0,
            paddingRight: 0,
            willChange: "transform",
          }}
        >
          <span style={{ marginRight: "4vw" }}>Creating Brand Precision</span>
          <span style={{ marginRight: "0vw" }}>Creating Brand Precision</span>
        </div>
      </div>


      <div style={{ height: "28vw" }}></div>
    </section>
  );
}