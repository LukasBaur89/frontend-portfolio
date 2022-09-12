import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import profilePicture from "../../assets/LB-135.jpg";
import HomeStyle from "./Homepage.css";

const Homepage = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>LUKAS BAUR</h1>
        <h2>Full Stack Developer</h2>
        <button className="btn-primary">Learn more</button>
      </div>
      <img className="profilePicture" src={profilePicture} alt="" />
    </div>
  );
};

export default Homepage;
