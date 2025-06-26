import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import profile from "../assets/profile.jpg";
import aboutimg from "../../public/img/about.jpg";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to my World
        </p>

        <AnimatedTitle
          title="Fr<b>o</b>t end <br /> <b>D</b>veloper"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>A passionate frontend developer with a self-driven mindset</p>
          <p className="text-gray-500">
            I'm a self-taught frontend developer with 2.9 years of experience. I
            specialize in crafting responsive and interactive user interfaces
            using technologies like HTML, CSS, JavaScript, and React.js.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={aboutimg}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
