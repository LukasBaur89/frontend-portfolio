import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";

import HomeStyle from "./Homepage.css";

const Homepage = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>LUKAS BAUR</h1>
        <h2>Full Stack Developer</h2>
        <button className="btn-primary">Learn more</button>
      </div>
    </div>
  );
};

export default Homepage;
