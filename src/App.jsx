import { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   const blockContextMenu = (e) => e.preventDefault();
  //   const blockKeys = (e) => {
  //     if (
  //       (e.ctrlKey && e.shiftKey && e.key === "I") ||
  //       (e.ctrlKey && e.key === "u") ||
  //       e.key === "F12"
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", blockContextMenu);
  //   document.addEventListener("keydown", blockKeys);

  //   return () => {
  //     document.removeEventListener("contextmenu", blockContextMenu);
  //     document.removeEventListener("keydown", blockKeys);
  //   };
  // }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {isLoaded && (
        <>
          <NavBar />
          <Hero />
          <About />
          <Features />
          {/* <Story /> */}
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
