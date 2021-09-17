import { useState } from "react";
import React from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="lg:w-4/5 md:w-2/3 flex flex-col px-5 py-10 mx-auto"
      >
        {/* sm:ml-5rem md:py-8 mt-8 md:mt-0 */}
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Hire Me
        </h2>
        {/* <a
            href="https://www.linkedin.com/in/omogbai-atakpu"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a> */}
        <p className="leading-relaxed mb-5">
          Like what you see? You can also{" "}
          <a
            href="https://drive.google.com/file/d/1AjvUUtFI0cJcEl7fzXZj9TOmDYnycps6/view?usp=sharing"
            className="underline text-blue-500 hover:text-blue-800"
          >
            download my resume
          </a>{" "}
          or reach out to me here:
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-sapphire-blue focus:ring-2 focus:ring-star-command text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-sapphire-blue focus:ring-2 focus:ring-star-command text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-sapphire-blue focus:ring-2 focus:ring-star-command h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-sapphire-blue border-0 py-2 px-6 focus:outline-none hover:bg-star-command rounded text-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
