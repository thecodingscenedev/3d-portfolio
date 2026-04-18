import React, { useState } from "react";
import { navLinks } from "../config/constants";

const NavbarItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a  className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full sm:rounded-md py-2 sm:px-2" href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="text-white fixed top-0 left-0 right-0 z-50 bg-black-200 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            CodingScene.dev
          </a>
          <button
            className="tex-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            onClick={handleToggle}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavbarItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
        <nav className="p-5">
          <NavbarItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
