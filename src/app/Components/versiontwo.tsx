import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomingHeroVideo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const videoWrapper = videoWrapperRef.current;
    const overlay = overlayRef.current;
    if (!section || !videoWrapper || !overlay) return;

    // Set enough scroll space for the zoom
    section.style.minHeight = isMobile ? "200vh" : "180vh";

    // Reset styles
    gsap.set(videoWrapper, {
      position: "absolute",
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      width: isMobile ? "80vw" : "48vw",
      height: isMobile ? "48vw" : "27vw",
      borderRadius: "2.5rem",
      zIndex: 2,
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      willChange: "all",
    });
    gsap.set(overlay, { opacity: 0 });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "120vh", // Ensures enough scroll for a true 100vh zoom before next section
      scrub: true,
      pin: false,
      onUpdate: (self) => {
        // progress from 0 (start) to 1 (full screen)
        const p = Math.min(self.progress / 0.88, 1);

        if (p < 1) {
          gsap.set(videoWrapper, {
            position: "fixed",
            left: "50vw",
            top: "50vh",
            xPercent: -50,
            yPercent: -50,
            width: `${isMobile ? 80 + 20 * p : 48 + 52 * p}vw`,
            height: `${isMobile ? 48 + 52 * p : 27 + 73 * p}vw`,
            borderRadius: `${2.5 - 2.5 * p}rem`,
            zIndex: 2,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          });
          gsap.set(overlay, { opacity: Math.max(0, (p - 0.2) * 1.25) });
        } else {
          gsap.set(videoWrapper, {
            position: "fixed",
            left: 0,
            top: 0,
            xPercent: 0,
            yPercent: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            zIndex: 1,
            boxShadow: "none",
          });
          gsap.set(overlay, { opacity: 1 });
        }
      },
      onLeave: () => {
        gsap.set(videoWrapper, {
          position: "fixed",
          left: 0,
          top: 0,
          xPercent: 0,
          yPercent: 0,
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          zIndex: 1,
          boxShadow: "none",
        });
        gsap.set(overlay, { opacity: 1 });
      },
      onLeaveBack: () => {
        gsap.set(videoWrapper, {
          position: "absolute",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          width: isMobile ? "80vw" : "48vw",
          height: isMobile ? "48vw" : "27vw",
          borderRadius: "2.5rem",
          zIndex: 2,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        });
        gsap.set(overlay, { opacity: 0 });
      },
    });

    return () => {
      st.kill();
    };
  }, [isMobile]);

  return (
    <>
      <section
        ref={sectionRef}
        style={{
          position: "relative",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {/* VIDEO */}
        <div ref={videoWrapperRef}>
          <video
            src={isMobile ? "/assets/videos/18arr-me.mp4" : "/assets/videos/t_one.mp4"}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          {/* OVERLAY (centered text/buttons) */}
          <div
            ref={overlayRef}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
              color: "#fff",
              textAlign: "center",
              pointerEvents: "none",
              fontFamily: "inherit",
              padding: isMobile ? "4vw" : "2vw",
              transition: "opacity .3s",
            }}
          >
            <div style={{
              fontSize: isMobile ? "1.1rem" : "1.2rem",
              letterSpacing: "0.1em",
              opacity: 0.85,
              marginBottom: isMobile ? "0.7rem" : "1.2rem",
              fontWeight: 400,
            }}>
              ENSURING YOUR VISION
            </div>
            <h1 style={{
              fontSize: isMobile ? "2rem" : "2.7rem",
              fontWeight: 700,
              marginBottom: isMobile ? "1.2rem" : "2rem",
              textShadow: "0 2px 16px rgba(0,0,0,0.32)"
            }}>
              Let us transform your concepts into tangible<br />and impactful realities.
            </h1>
            <div style={{
              display: "flex",
              gap: "1rem",
              pointerEvents: "auto",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <button
                style={{
                  fontSize: "1rem",
                  background: "#fff",
                  color: "#222",
                  border: "none",
                  borderRadius: "2rem",
                  padding: isMobile ? "0.7rem 1.8rem" : "0.8rem 2rem",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Buy Template
              </button>
              <button
                style={{
                  fontSize: "1rem",
                  background: "#222",
                  color: "#fff",
                  border: "none",
                  borderRadius: "2rem",
                  padding: isMobile ? "0.7rem 1.8rem" : "0.8rem 2rem",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Let's Talk &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* NEXT SECTION: Only appears after video is fully zoomed */}
      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          position: "relative",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#222" }}>Next Section — Always Visible After Hero</h1>
      </div>
    </>
  );
}