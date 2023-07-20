import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const hideNavbar = () => {
    setIsNavbarVisible(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isNavbarVisible ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto">
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link"  to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link" to="/health">
              Health
            </NavLink>
          </li>
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link" to="/business">
              Business
            </NavLink>
          </li>
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link" to="/science">
              Science
            </NavLink>
          </li>
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link" to="/sports">
              Sports
            </NavLink>
          </li>
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link" to="/technology">
              Technology
            </NavLink>
          </li>
          <li className="nav-item mx-2" onClick={hideNavbar}>
            <NavLink className="nav-link" to="/entertainment">
              Entertainment
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
