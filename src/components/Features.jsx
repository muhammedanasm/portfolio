import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import CardSwap, { Card } from "./CardSwap";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1750760747587.json";
// import animationData from "../assets/Animation - 1750760836835.json";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const isVideo = src?.endsWith(".mp4") || src?.endsWith(".webm");

  return (
    <div className="relative size-full">
      {isVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt="Card visual"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      {/* <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Lorem ipsum lorem Ipsum
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deleniti
          dicta cupiditate. Officiis voluptatum eum, nisi quis harum repellat
          delectus, voluptate tempora quae.
        </p>
      </div> */}
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Technical skills
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          <span className="block pb-2">
            <strong>Frontend:</strong> React.js, Redux, Redux Toolkit, HTML5,
            CSS3, JavaScript, Tailwind CSS, Bootstrap, SASS, Framer Motion, AOS
          </span>
          <span className="block pb-2">
            <strong>UI Libraries:</strong> Material-UI (MUI), Ant Design,
            PrimeReact, Aceternity
          </span>
          <span className="block pb-2">
            <strong>Tools:</strong> Git, Vite, VS Code, Axios, Postman, Figma,
            Firebase, FileZilla, Canva
          </span>
          I craft responsive, accessible, and animated user interfaces with
          attention to performance and scalability.
        </p>
      </div>

      {/* CardSwap replaces the first big card */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <div className="flex flex-col md:flex-row h-full w-full gap-6">
          {/* Lottie on the left */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-3/3 h-auto"
            />
          </div>
          <div
            className="w-full md:w-1/2"
            style={{ height: "100%", width: "100%", position: "relative" }}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              <Card>
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white shadow-lg flex flex-col justify-between border border-white/10 items-center">
                  {/* Logo */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="/img/zinfog.svg"
                      alt="logo"
                      className="h-10 w-20 rounded-full object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-semibold leading-none pb-2">
                        Zinfog Codelabs Pvt Ltd
                      </h2>
                      <p className="text-sm text-gray-400 text-center">
                        Kerala, India
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    Frontend Developer
                  </div>

                  {/* Duration */}
                  <p className=" text-sm text-gray-300">Aug 2022 — Apr 2025</p>

                  {/* Quote */}
                  <div className="mt-4 rounded-md bg-white/5 p-3 text-sm italic text-gray-300 text-center">
                    “Your first company always holds a special place — a true
                    launchpad into the real world.”
                  </div>

                  {/* Link */}
                  <a
                    href="https://zinfog.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs text-green-400 hover:underline inline-flex items-center gap-1"
                  >
                    zinfog.com <TiLocationArrow className="text-sm" />
                  </a>
                </div>
              </Card>

              <Card>
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white shadow-lg flex flex-col justify-between border border-white/10 items-center">
                  {/* Logo */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="/img/logo-2.webp"
                      alt="logo"
                      className="h-10 w-20 rounded-full object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-semibold leading-none pb-2">
                        Mentegoz Technologies
                      </h2>
                      <p className="text-sm text-gray-400 text-center">
                        Kerala, India
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    Frontend Developer
                  </div>

                  {/* Duration */}
                  {/* <p className=" text-sm text-gray-300">Aug 2022 — Apr 2025</p> */}

                  {/* Quote */}
                  <div className="mt-4 rounded-md bg-white/5 p-3 text-sm italic text-gray-300 text-center">
                    “Your first company always holds a special place — a true
                    launchpad into the real world.”
                  </div>

                  {/* Link */}
                  <a
                    href="https://www.mentegoz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs text-green-400 hover:underline inline-flex items-center gap-1"
                  >
                    mentegoz.com <TiLocationArrow className="text-sm" />
                  </a>
                </div>
              </Card>
              <Card>
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white shadow-lg flex flex-col justify-between border border-white/10 items-center">
                  {/* Logo */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="/img/portfoliologo.webp"
                      alt="logo"
                      className="h-10 w-20 rounded-full object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-semibold leading-none pb-2">
                        Freelance Web Designer
                      </h2>
                      <p className="text-sm text-gray-400 text-center">
                        Remote / India
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    Frontend Developer
                  </div>

                  {/* Duration */}
                  <p className=" text-sm text-gray-300">Aug 2022 — Present</p>

                  {/* Quote */}
                  <div className="mt-4 rounded-md bg-white/5 p-3 text-sm italic text-gray-300 text-center">
                    “Your first company always holds a special place — a true
                    launchpad into the real world.”
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </BentoTilt>

      {/* Grid layout */}
      <div
        id="projects"
        className="grid h-[210vh] w-full grid-cols-2 grid-rows-3 gap-7"
      >
        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <a
            href="https://b2ne-nextjs-test-project.vercel.app/" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img/b2nes.jpg"
              title={
                <>
                  b2n<b>e</b>s
                </>
              }
              description="A licensed crypto brokerage platform built to empower serious traders."
            />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <a
            href="https://www.swadiamonds.com/" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img/swadiamonds.png"
              title={
                <>
                  s<b>w</b>a
                </>
              }
              description="Swa Diamonds offers certified diamonds in India and the UAE at wholesale."
              // isComingSoon
            />
          </a>
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <a
            href="https://welota.com/" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img/welota.png"
              title={
                <>
                  w<b>e</b>lota
                </>
              }
              description="Earn 20% by registering locals via our app. Low-cost franchise plan."
              // isComingSoon
            />
          </a>
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <a
            href="https://core-vista.com/" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
          >
            <BentoCard
              src="/img/corevista.png"
              title={
                <>
                  cor<b>e</b>vista
                </>
              }
              description="Corevista offers stable returns for investors and property partners."
              // isComingSoon
            />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt> */}
      </div>
    </div>
  </section>
);

export default Features;
