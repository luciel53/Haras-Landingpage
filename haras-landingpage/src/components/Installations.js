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
    <section className="bg-darkBrown  mb-10 pt-1">
      <h2
        id="Installations"
        className="text-center text-golden text-4xl md:text-6xl lg:text-8xl mt-5 md:mt-10 mb-4 md:mb-0 lg:mb-7"
      >
        Installations
      </h2>
      <div className=" text-golden text-2xl text-center mx-auto">
        <Carousel images={installationsImg} />
        <ul className=" list-disc text-left md:text-4xl lg:text-6xl ml-28 md:ml-[35%] lg:ml-[40%] py-4 md:py-3">
          <li> Manège de 20 * 60 m</li>
          <li> Carrière de 40 * 70 m</li>
          <li> Ecurie de 30 box</li>
          <li className="md:pb-6"> 8 paddocks sur 10 hectares</li>
        </ul>
      </div>
    </section>
  );
}

export default Installations;
