import React, { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
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
      <About aboutRef={aboutRef} />
      <Projects projectRef={projectRef} />
      <Skills skillsRef={skillsRef} />
      <Reviews reviewRef={reviewRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}

export default App;
