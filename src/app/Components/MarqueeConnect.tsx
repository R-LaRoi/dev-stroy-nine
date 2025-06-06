import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function MarqueeHeroSection() {
  const isMobile = useIsMobile();
  const marqueeSectionRef = useRef<HTMLDivElement>(null);
  const marqueeLine1Ref = useRef<HTMLDivElement>(null);
  const marqueeLine2Ref = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([
        marqueeLine1Ref.current,
        marqueeLine2Ref.current,
        videoWrapperRef.current,
        overlayRef.current
      ]);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const marqueeSection = marqueeSectionRef.current;
      const line1 = marqueeLine1Ref.current;
      const line2 = marqueeLine2Ref.current;

      if (marqueeSection && line1 && line2) {
        gsap.to(line1, {
          x: () => `-${line1.scrollWidth / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: marqueeSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        gsap.to(line2, {
          x: () => `${line2.scrollWidth / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: marqueeSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }

      const videoSection = videoSectionRef.current;
      const videoWrapper = videoWrapperRef.current;
      const overlay = overlayRef.current;

      if (videoSection && videoWrapper && overlay) {
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
      }
      ScrollTrigger.create({
        trigger: videoSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const fixedStartProgress = 0.05;
          const fixedEndProgress = 0.95;

          if (progress < fixedStartProgress) {
            gsap.to(videoWrapper, {
              duration: 0.1,
              position: "relative",
              left: "50%",
              top: "0",
              xPercent: -50,
              yPercent: 0,
              width: "44vw",
              height: "28vw",
              zIndex: 1,
              ease: "none",
              overwrite: true,
            });
          } else if (progress >= fixedStartProgress && progress <= fixedEndProgress) {
            const scaleProgress = (progress - fixedStartProgress) / (fixedEndProgress - fixedStartProgress);

            gsap.to(videoWrapper, {
              duration: 0.1,
              position: "fixed",
              left: "50vw",
              top: "50vh",
              xPercent: -50,
              yPercent: -50,
              width: `${44 + 56 * scaleProgress}vw`,
              height: `${28 + 44 * scaleProgress}vw`,
              zIndex: 60,
              ease: "none",
              overwrite: true,
            });
          } else {
            gsap.to(videoWrapper, {
              duration: 0.1,
              position: "relative",
              left: "50%",
              top: "0",
              xPercent: -50,
              yPercent: 0,
              width: "100vw",
              height: "72vw",
              zIndex: 1,
              ease: "none",
              overwrite: true,
            });
          }

          gsap.to(overlay, {
            opacity: progress > 0.6 ? 1 : 0,
            duration: 0.2,
            overwrite: "auto",
          });
        },
        onEnter: () => {
          gsap.set(videoWrapper, {
            position: "fixed",
            zIndex: 60,
          });
        },
        onLeave: () => {
          gsap.set(videoWrapper, {
            position: "relative",
            zIndex: 1,
          });
        },
        onEnterBack: () => {
          gsap.set(videoWrapper, {
            position: "fixed",
            zIndex: 60,
          });
        },
        onLeaveBack: () => {
          gsap.set(videoWrapper, {
            position: "relative",
            zIndex: 1,
          });
        },
      });
    }
  }, [isMobile]); // depend on isMobile

  return (
    <section className="w-full bg-white overflow-hidden">
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
        style={{ minHeight: "400vh" }}
      >
        <div
          ref={videoWrapperRef}
          style={{
            aspectRatio: "16/9",
            pointerEvents: "none",
          }}
        >
          <video
            src={isMobile ? "/assets/videos/mobile.mp4" : "/assets/videos/t_one.mp4"}
            className="w-full h-full object-fill"
            autoPlay
            muted
            loop
            playsInline
            style={{ borderRadius: 0 }}
          />

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
              <Reveal width="100%">
                <div>
                  <h2 className="text-6xl tracking-wider  mb-2" style={{ fontWeight: 400, opacity: 0.93 }}>
                    Ready to transform your digital presence?
                  </h2>
                  <h3 className="text-2xl md:text-3xl leading-tight mb-8" style={{ color: "#fff", opacity: 0.93 }}>
                    Let's build a website that truly reflects your brand and connects with your audience
                  </h3>
                  <div className="flex justify-center mt-4">
                    <Link href="/Pages/Connect">
                      <button
                        style={{
                          fontSize: "1rem",
                          background: "#222",
                          color: "#fff",
                          border: "none",
                          borderRadius: "2rem",
                          padding: "0.7rem 1.8rem",
                          fontWeight: 600,
                          cursor: "pointer"
                        }}
                      >
                        Let's Talk &rarr;
                      </button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
      <div ref={nextSectionRef} className="next-section-content" style={{ height: "20vh", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
      </div>
    </section>
  );
}