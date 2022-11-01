import React, { useEffect, useRef } from "react";
import ReactGA from "react-ga";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const TRACKING_ID = "UA-200635602-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  // useEffect(() => {
  //   window.location.href = "https://omogbaiatakpu.com/";
  // }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const aboutRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const reviewRef = useRef();
  const contactRef = useRef();
  // const scrollToSection = (ref) => console.log(ref);
  const scrollToSection = (ref) =>
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  let navRef = useRef();
  return (
    <>
      {/* <header className="sticky ">here comes the sun</header> */}
      <main className="text-gray-300 bg-coff-ee body-font">
        {/* // <main className="text-gray-400 bg-regal-blue body-font"> */}
        <Navbar
          scroll={scrollToSection}
          aboutRef={aboutRef}
          projectRef={projectRef}
          skillsRef={skillsRef}
          reviewRef={reviewRef}
          contactRef={contactRef}
          navRef={navRef}
        />
        <About
          scroll={scrollToSection}
          aboutRef={aboutRef}
          contactRef={contactRef}
          projectRef={projectRef}
        />
        <Projects projectRef={projectRef} />
        <Skills skillsRef={skillsRef} />
        <Reviews reviewRef={reviewRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </main>
    </>
  );
}

export default App;
