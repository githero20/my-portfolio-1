import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="text-gray-300 bg-coff-ee body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            A selection of some of my apps.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I am committed to building user-friendly, interactive websites and
            applications. <br className="hidden sm:inline-block" />
            Here are a few I've had the pleasure of developing, for clients and
            as practice exercises. Feel free to peruse them.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 my-4 mx-auto">
          {/* <div className="flex flex-wrap -m-4"> */}
          {/* <div className="w-full flex flex-wrap m-4"> */}
          {/* this is the div that wraps all the projects done */}

          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4"
              // className="w-full rounded-full h-full p-4"
            >
              <div className="flex relative">
                {/* <div className="aspect-w-3 aspect-h-4 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4"> */}
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  // className="absolute inset-0 object-cover object-center rounded-lg"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-sapphire-blue mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
