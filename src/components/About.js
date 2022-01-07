import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Omogbai; <br />a FULL
            {/* Hi, I'm Omogbai; <br className="hidden sm:inline-block" />a FULL */}
            STACK developer.
          </h1>

          {/* <p className="mb-8 leading-relaxed">
            I also rate plantain professionally :)
          </p> */}
          <p className="mb-8 leading-relaxed">
            I also rate plantain professionally :)
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-sapphire-blue border-0 py-2 px-6 focus:outline-none hover:bg-star-command rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="focus:outline-none border-none object-cover object-center rounded-full px-6 "
            src="./g.png"
            alt="omogbai"
            //this is an image of the author, in this case omogbai
          />
        </div>
      </div>
    </section>
  );
}

export default About;
