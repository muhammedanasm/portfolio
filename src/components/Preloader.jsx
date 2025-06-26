import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // Text in
    tl.fromTo(
      ".preloader-text",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    // Text out
    tl.to(".preloader-text", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      delay: 0.3,
      stagger: 0.1,
      ease: "power3.in",
    });

    // Slide the entire overlay off-screen (revealing site underneath)
    tl.to(overlayRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      onComplete,
    });
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <div className="flex gap-2 text-3xl font-bold tracking-wide">
        {"Welcome".split("").map((char, i) => (
          <span key={i} className="preloader-text inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
