import React from "react";
import { NavLink } from "react-router-dom";
import navbarStyling from "./Navbar.css";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>

      <ul className="navItemWrapper">
        <div className="LB-logo">
          <NavLink className="navWhite" to="/about-me">
            <li className="logo">Home</li>
          </NavLink>
        </div>

        <NavLink className="navWhite" to="/my-projects">
          <li>About</li>
        </NavLink>

        <NavLink className="navWhite" to="/my-projects">
          <li>Projects</li>
        </NavLink>

        <NavLink className="navWhite" to="/my-projects">
          <li>Portfolio</li>
        </NavLink>

        <NavLink className="navWhite" to="/my-projects">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
