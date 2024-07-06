import React, { useState } from "react";
import "./Navbarr.css";

function Navbarr() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar__container">
        <h2 className="navbar__title">
          <a href="#home">Frontend Developer</a>
        </h2>
        <div className="navbar__menu">
          <ul className={isOpen ? "active" : ""}>
            <li>
              <a className="menu__link" href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a className="menu__link" href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a className="menu__link" href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a className="menu__link" href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <span className={`toggle__icon ${isOpen ? "active" : ""}`}></span>
          <span className={`toggle__icon ${isOpen ? "active" : ""}`}></span>
          <span className={`toggle__icon ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbarr;
