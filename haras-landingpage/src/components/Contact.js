import React from "react";

function Contact() {
  return (
    <section className="bg-darkBrown mb-10 pt-1">
      <h2
        id="Contact"
        className="text-center text-golden text-4xl md:text-6xl lg:text-8xl mt-5 md:mt-10 mb-4 md:mb-0 lg:mb-0 lg:pb-8"
      >
        Contact
      </h2>
      <div className="max-w-xl mx-auto px-4">
        <form className="pb-8 md:pb-12 lg:pb-16 flex flex-col">
          <div className="flex flex-col md:text-3xl px-10 lg:px-4 py-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full lg:h-10 mb-4 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-golden focus:border-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full lg:h-10 mb-4 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-golden focus:border-4"
            />
            <input
              type="text"
              placeholder="Sujet"
              className="w-full lg:h-10 mb-4 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-golden focus:border-4"
            />
            <textarea
              type="text"
              placeholder="Votre message"
              className="w-full p-1 h-32 border border-gray-300 rounded-md focus:outline-none focus:border-golden focus:border-4"
            />
          </div>
          <button
            className="bg-golden md:text-4xl text-center w-16 md:w-32 md:h-12 rounded-md mx-auto md:mt-2 lg:mt-8 shadow-lg hover:opacity-85"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
