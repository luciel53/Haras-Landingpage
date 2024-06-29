import React from "react";
import ride from "../assets/images/ride.png";

function Services() {
  return (
	<section className="-mt-5 pb-5">
		<h2 id='Services' className="text-center text-4xl md:text-6xl lg:text-8xl">Services</h2>
		<div className="flex flex-row mx-auto ml-5 md:ml-16 lg:ml-80 mt-5 md:mt-8 lg:justify-around">
			<img src={ride} alt="nos services" className="w-36 md:w-52 lg:w-96"></img>
			<ul className=" list-disc text-left text-2xl md:text-4xl lg:text-6xl ml-10 md:ml-[10%] lg:ml-[10%] lg:mr-80 py-4 md:py-3">
				<li>Pension “Box-Travail” - 980€/mois</li>
				<li>Pension “Box” - 780€/mois</li>
				<li>Cours individuel - 35€</li>
				<li>Location de la carrière - 15 €</li>
				<li>Tonte - 70€</li>
			</ul>
		</div>
	</section>
  );
}

export default Services;
