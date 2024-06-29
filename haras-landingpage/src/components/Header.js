import React, { useState } from "react";
import burger from "../assets/images/burger.svg";

function Header() {
  const [openBurger, setOpenBurger] = useState(false);

  const toggleBurger = () => {
    setOpenBurger(!openBurger);
  };

  const closeMenu = () => {
    setOpenBurger(false);
  };

  return (
    <header className="bg-headerBg bg-cover bg-center h-screen text-golden flex flex-col">
      <div className="flex flex-row">
        {/* NavBar */}
        <nav
          className={`container text-4xl ${
            openBurger
              ? "flex flex-col text-center py-16 z-0"
              : "hidden md:flex md:flex-row md:px-32"
          } min-w-full py-5 lg:px-96 justify-around backdrop-brightness-75 animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in`}
        >
          <a
            className="relative group transition duration-300 md:pr-4"
            href="#Histoire"
            onClick={closeMenu}
          >
            Histoire
            <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group transition duration-300 md:pr-4"
            href="#Installations"
            onClick={closeMenu}
          >
            Installations
            <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group transition duration-300 md:pr-4"
            href="#Services"
            onClick={closeMenu}
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group transition duration-300 md:pr-4"
            href="#Contact"
            onClick={closeMenu}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group transition duration-300"
            href="#Team"
            onClick={closeMenu}
          >
            Team
            <span className="absolute left-0 bottom-0 w-0 h-0.25 bg-golden transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        {/* Burger Menu */}
        <div className="flex flex-col w-5 md:hidden absolute mt-3 ml-3">
          <img
            src={burger}
            alt="Menu"
            className="cursor-pointer"
            onClick={toggleBurger}
          ></img>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center rounded-full ">
        <h1 className="text-6xl absolute md:static top-2/3 md:text-8xl lg:text-9xl text-center md:mt-60 w-[100%] h-48 backdrop-brightness-75 px-8 py-8 animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in">
          Haras du Lorem Ipsum
        </h1>
      </div>
    </header>
  );
}

export default Header;
