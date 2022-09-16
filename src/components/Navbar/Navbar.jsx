import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarStyling from "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <div className="navbar-header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="me-and-myself" />
      </NavLink>
      <nav className="navigation">
        <ul className={hamburgerMenu ? "hideMenu" : "showMenu"}>
          <NavLink className="nav-item" to="/">
            <li>Home</li>
          </NavLink>

          <NavLink className="nav-item" to="/my-projects">
            <li>About</li>
          </NavLink>

          <NavLink className="nav-item" to="/my-projects">
            <li>Projects</li>
          </NavLink>

          <NavLink className="nav-item" to="/my-projects">
            <li>Portfolio</li>
          </NavLink>

          <NavLink className="nav-item" to="/my-projects">
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="nav-hamburger" onClick={toggleHamburger}>
          <Hamburger
            className="nav-hamburger"
            toggled={hamburgerMenu}
            toggle={setHamburgerMenu}
          ></Hamburger>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
