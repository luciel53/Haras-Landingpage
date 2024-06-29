import React from "react";
import Carousel from "./carousel";
import manege from "../assets/images/manege.png";
import jumping from "../assets/images/jumping.png";
import stable from "../assets/images/stable.png";
import paddocks from "../assets/images/paddocks.png";

function Installations() {
  const installationsImg = [
    { src: paddocks, alt: "Paddocks", width: "100%", height: "100%" },
    { src: jumping, alt: "Carrières", width: "100%", height: "100%" },
    { src: stable, alt: "Ecurie", width: "100%", height: "100%" },
    { src: manege, alt: "Manège", width: "100%", height: "100%" },
  ];

  return (
    <section className="bg-darkBrown h-screen mb-10 pt-1">
      <h2
        id="Installations"
        className="text-center text-golden text-4xl md:text-6xl lg:text-8xl mt-5 md:mt-10 mb-4 md:mb-8"
      >
        Installations
      </h2>
      <div className=" text-golden text-2xl text-center mx-auto">
        <Carousel images={installationsImg} />
      </div>
    </section>
  );
}

export default Installations;
