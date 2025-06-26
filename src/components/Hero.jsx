// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
// import { TiLocationArrow } from "react-icons/ti";
// import profile from "../assets/profile.JPG";
// import Button from "./Button";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   useGSAP(() => {
//     // Animate the background image clip-path into diamond shape
//     gsap.fromTo(
//       ".hero-bg",
//       {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // full rectangle
//       },
//       {
//         clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // diamond shape
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".hero-bg",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       }
//     );

//     // Optional: fade/move text on scroll
//     gsap.to(".hero-text", {
//       y: -60,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: ".hero-bg",
//         start: "top center",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div
//       className="hero-bg relative h-dvh w-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${profile})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Content */}
//       <div className="absolute z-20 top-0 left-0 size-full flex flex-col justify-center px-5 sm:px-10">
//         <h1 className="hero-text special-font hero-heading text-blue-100">
//           redefi<b>n</b>e
//         </h1>

//         <p className="hero-text mb-5 max-w-64 font-robert-regular text-blue-100">
//           Enter the Metagame Layer <br /> Unleash the Play Economy
//         </p>

//         <Button
//           id="watch-trailer"
//           title="Watch trailer"
//           leftIcon={<TiLocationArrow />}
//           containerClass="bg-yellow-300 flex-center gap-1"
//         />
//       </div>

//       {/* Bottom heading */}
//       <h1
//         id="bottom-heading"
//         className="special-font hero-heading absolute bottom-5 right-5 z-20 text-white"
//       >
//         G<b>A</b>MING
//       </h1>
//     </div>
//   );
// };

// export default Hero;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";
import profile from "../assets/profile.JPG";
import banner from "../../public/img/banner.png";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    // Background clip-path shrink to diamond
    gsap.fromTo(
      ".hero-bg",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-bg",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Inner content shrink + fade
    gsap.to(".hero-content", {
      scale: 0.7,
      opacity: 0,
      y: -50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-bg",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Optional: Bottom heading fade
    gsap.to("#bottom-heading", {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: ".hero-bg",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="hero-bg relative h-dvh w-screen bg-cover  bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Animated Content */}
      <div className="hero-content absolute z-20 top-0 left-0 size-full flex flex-col justify-center px-5 sm:px-10 text-blue-100">
        <h1 className="hero-text special-font hero-heading animated-gradient-text">
          develop<b>e</b>r
        </h1>

        <p className="hero-text mb-5 max-w-64 font-robert-regular">
          I'm a Self-taught <br /> Frontend Developer
        </p>

        <Button
          id="watch-trailer"
          title="Download Cv"
          leftIcon={<TiLocationArrow />}
          containerClass="bg-yellow-300 flex-center gap-1"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/files/Anas.pdf";
            link.download = "Anas-CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        />
      </div>

      {/* Bottom Heading */}
      <h1
        id="bottom-heading"
        className="special-font hero-heading absolute bottom-5 right-5 z-20 text-white"
      >
        R<b>e</b>act Js
      </h1>
    </div>
  );
};

export default Hero;
