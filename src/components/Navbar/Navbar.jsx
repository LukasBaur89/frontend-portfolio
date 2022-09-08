import React from "react";
import { NavLink } from "react-router-dom";
import navbarStyling from "./Navbar.css";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="logo">
        LB
      </NavLink>

      <ul className="navItemWrapper">
        <NavLink className="navWhite" to="/about-me">
          <li>About</li>
        </NavLink>

        <NavLink className="navWhite" to="/my-projects">
          <li>Projects</li>
        </NavLink>

        <NavLink className="navWhite" to="/about-me">
          <li>Services</li>
        </NavLink>
      </ul>
      <Button variant="outlined">Darkmode</Button>
    </nav>
  );
};

export default Navbar;
