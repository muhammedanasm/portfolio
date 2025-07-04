// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Preloader = ({ onComplete }) => {
//   const overlayRef = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Text in
//     tl.fromTo(
//       ".preloader-text",
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power3.out",
//       }
//     );

//     // Text out
//     tl.to(".preloader-text", {
//       opacity: 0,
//       y: -20,
//       duration: 0.5,
//       delay: 0.3,
//       stagger: 0.1,
//       ease: "power3.in",
//     });

//     // Slide the entire overlay off-screen (revealing site underneath)
//     tl.to(overlayRef.current, {
//       y: "-100%",
//       duration: 1,
//       ease: "power2.inOut",
//       onComplete,
//     });
//   }, [onComplete]);

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
//     >
//       <div className="flex gap-2 text-3xl font-bold tracking-wide">
//         {"Welcome".split("").map((char, i) => (
//           <span key={i} className="preloader-text inline-block">
//             {char}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Preloader;
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef();
  const circleRef = useRef();
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete });

    // Animate letters in with stagger
    tl.fromTo(
      lettersRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }
    );

    // Circle starts hidden
    gsap.set(circleRef.current, { scale: 0, opacity: 0 });

    // Then expand circle
    tl.to(circleRef.current, {
      scale: 30,
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
    });

    // Fade out letters as circle expands
    tl.to(
      lettersRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.05,
      },
      "-=1"
    );

    // Fade out entire overlay
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
    });

    tl.set(overlayRef.current, { display: "none" });
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Circle */}
      <div
        ref={circleRef}
        className="absolute w-24 h-24 rounded-full bg-white"
      ></div>

      {/* Letters */}
      <div className="flex gap-1 text-4xl font-bold tracking-wide text-white relative z-10">
        {"Welcome".split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
