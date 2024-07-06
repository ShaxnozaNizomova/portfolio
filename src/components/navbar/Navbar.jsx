import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div>
          <h2>
            <a className="navbar__title" href="#home">
              Frontend Developer
            </a>
          </h2>
        </div>
        <div>
          <ul className="navbar__menu">
            <li>
              <a className="menu__link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu__link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="menu__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
