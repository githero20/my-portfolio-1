import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { reviews } from "../data";

function Reviews() {
  return (
    <section id="reviews">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Reviews
        </h1>
        <div className="flex flex-wrap lg:w-4/5 my-4 mx-auto">
          {/* <div className="flex flex-wrap m-4"> */}
          {reviews.map((review) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                {/* <TerminalIcon className="block w-8 text-gray-400 mb-4" /> */}
                <FontAwesomeIcon
                  // className="w-8 h-8 mr-1"
                  className="block w-8 text-gray-400 mb-4"
                  icon={faQuoteLeft}
                  size="2x"
                />
                <p className="leading-relaxed mb-6">{review.quote}</p>
                <div className="inline-flex items-center">
                  {/* <img
                    alt="review"
                    src={review.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {review.name}
                    </span>
                    <span className="text-gray-400 text-sm uppercase">
                      {review.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
