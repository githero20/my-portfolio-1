import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

function Navbar({
  scroll,
  aboutRef,
  projectRef,
  skillsRef,
  reviewRef,
  contactRef,
  navRef,
}) {
  return (
    <header ref={navRef} className="bg-gray-800 md:sticky top=0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button className="title-font font-medium text-white mb-4 mb-4 md:mb-0">
          <span className="ml-3 text-xl" onClick={() => scroll(aboutRef)}>
            Omogbai Atakpu
          </span>
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <span
            className="mr-5 hover:text-white cursor-pointer"
            onClick={() => scroll(projectRef)}
          >
            Projects
          </span>
          <span
            className="mr-5 hover:text-white cursor-pointer"
            onClick={() => scroll(skillsRef)}
          >
            Skills
          </span>
          <span
            href="#reviews"
            className="mr-5 hover:text-white cursor-pointer"
            onClick={() => scroll(reviewRef)}
          >
            Reviews
          </span>
        </nav>

        <nav>
          <a
            href="https://www.linkedin.com/in/omogbai-atakpu"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/githero20"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </nav>

        <span
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => scroll(contactRef)}
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </span>
      </div>
    </header>
  );
}

export default Navbar;
