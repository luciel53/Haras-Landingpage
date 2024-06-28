import React from "react";
import castle from "../assets/images/castle.png";

function Story() {
  return (
    <section className="mb-10">
      <h2
        id="Histoire"
        className="text-center text-4xl md:text-6xl lg:text-8xl mt-5 md:mt-10 mb-4 md:mb-8"
      >
        Histoire
      </h2>
      <div className="flex flex-col lg:flex-row mb-4 text-center justify-center">
        <div className="">
          <img
            src={castle}
            alt="Le domaine"
            className="w-80 md:w-96 lg:w-[100%] mx-auto"
          ></img>
        </div>
        <div className="mb-4 lg:w-96 lg:mx-16 lg:mr-52">
          <p className="py-1 md:py-4 px-10 md:px-16 lg:px-0 lg:w-[160%] text-2xl md:text-4xl lg:text-6xl leading-7 break-all">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor tristique scelerisque. Aliquam leo enim, tempus sit amet
            velit eu, varius tincidunt nisi. Maecenas viverra enim at nulla
            semper, vel vestibulum nisl iaculis. Etiam imperdiet enim dolor, non
            ultricies nisl luctus et. Suspendisse eleifend dictum dui ut
            ullamcorper. Suspendisse bibendum nisi eget hendrerit aliquam.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
