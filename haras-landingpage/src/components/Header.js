import React from "react";

function Header() {
  return (
    <header className="bg-headerBg bg-cover bg-center h-screen text-golden flex flex-col">
      <nav className="container text-4xl flex min-w-full py-5 px-80 justify-around backdrop-brightness-75 animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in ">
        <a className="relative group transition duration-300" href="#Histoire">
          Histoire
          <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="relative group transition duration-300"
          href="#Installations"
        >
          Installations
          <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a className="relative group transition duration-300" href="#Services">
          Services
          <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a className="relative group transition duration-300" href="#Contact">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a className="relative group transition duration-300" href="#Team">
          Team
          <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
      <div className="flex-grow flex items-center justify-center rounded-full ">
        <h1 className="text-9xl text-center mt-60 backdrop-brightness-75 px-8 py-2 animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in">
          Haras du Lorem Ipsum
        </h1>
      </div>
    </header>
  );
}

export default Header;
