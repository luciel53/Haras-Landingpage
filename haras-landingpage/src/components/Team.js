import React from "react";
import Carousel from "./carousel";
import franck from "../assets/images/franck.png";
import Suzie from "../assets/images/Suzie.png";
import Emma from "../assets/images/Emma.png";

function Team() {
  const teamImg = [
    { src: franck, alt: "coach", caption: "Franck, coach et cavalier" },
    { src: Suzie, alt: "coach", caption: "Suzie, coach et cavalière" },
    { src: Emma, alt: "responsable d'écurie", caption: "Emma, responsable d'écurie" },
  ];

  return (
    <section className="">
      <h2
        id="Team"
        className="text-center text-4xl md:text-6xl lg:text-8xl lg:pt-5"
      >
        Team
      </h2>
      <div className="-mt-28 pb-10">
        <Carousel images={teamImg} />
      </div>
    </section>
  );
}

export default Team;
