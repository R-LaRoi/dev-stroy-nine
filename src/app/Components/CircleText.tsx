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

    // Fixed marquee animation - smoother scroll-based movement
    gsap.to(line1, {
      x: () => `-${line1.scrollWidth / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: marqueeSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Changed from true to 1 for smoother animation
      },
    });

    gsap.to(line2, {
      x: () => `${line2.scrollWidth / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: marqueeSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Changed from true to 1 for smoother animation
      },
    });

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
      scrub: 1, // Smoother scrubbing
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
          // Smooth interpolation during transition
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
          paddingTop: "6vw",
          paddingBottom: "4vw",
        }}
      >
        {/* Line 1 (scrolls left) */}
        <div
          ref={marqueeLine1Ref}
          className="font-sans text-black"
          style={{
            fontSize: "7vw",
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
            fontSize: "7vw",
            lineHeight: 1,
            whiteSpace: "nowrap",
            marginTop: "-0.5vw",
            paddingLeft: 0,
            paddingRight: 0,
            willChange: "transform",
          }}
        >
          <span style={{ marginRight: "4vw" }}>Creating Brand Precision</span>
          <span style={{ marginRight: "4vw" }}>Creating Brand Precision</span>
        </div>
      </div>

      {/* Video Section */}
      <div
        ref={videoSectionRef}
        className="relative"
        style={{ minHeight: "110vh" }}
      >
        <div
          ref={videoWrapperRef}
          style={{
            aspectRatio: "16/9",
            pointerEvents: "none",
          }}
        >
          <video
            src="/assets/videos/t_one.mp4"
            className="w-full h-full object-fill"
            autoPlay
            muted
            loop
            playsInline
            style={{ borderRadius: 0 }}
          />
          {/* Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 text-white z-20"
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "70vw", margin: "0 auto" }}>
              <h2 className="text-6xl tracking-wider  mb-2" style={{ fontWeight: 400, opacity: 0.93 }}>
                Ready to transform your digital presence?
              </h2>
              <h3 className="text-2xl md:text-3xl leading-tight mb-8" style={{ color: "#fff", opacity: 0.93 }}>
                Let's build a website that truly reflects your brand and connects with your audience
              </h3>
              <div className="flex justify-center mt-4">
                <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 pointer-events-auto shadow">
                  Let's Talk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Spacer to make room for full-zoomed video */}
        <div style={{ height: "72vw" }}></div>
      </div>
      <div style={{ height: "28vw" }}></div>
    </section>
  );
}