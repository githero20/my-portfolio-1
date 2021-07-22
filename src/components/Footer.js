import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 sticky bottom=0">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
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

        <p className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 rounded text-base mt-4 md:mt-0">
          <FontAwesomeIcon
            className="w-8 h-8 mr-1"
            icon={faCopyright}
            size="1.5x"
          />{" "}
          2021 (Omogbai Atakpu)
        </p>
      </div>
      {/* <div className="lg:w-2/3 md:w-1/2 bg-coff-ee rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <div className="lg:w-1/2 md:w-2/3 flex flex-col px-5 py-10 mr-auto bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md ml-auto">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Yaba, Lagos <br />
              Nigeria
            </p>
          </div>
          <div className="lg:w-3/5 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-sapphire-blue leading-relaxed">
              atakpuomogbai@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">+234-818-577-5382</p>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
