import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import { IoMenu } from "react-icons/io5";
import { BsBorderTop, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquarePhone } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { GiTeamIdea, GiBrain, GiFlexibleStar } from "react-icons/gi";
import Home from "./Home";
import Header from "./Head";
import Experience from "./Experience";
import Projects from "./Projects";

function App() {
  function open(url) {
    window.open(url, "_blank");
  }

  function openGmail() {
    window.location.href = "mailto:yassine.jellouli.2001@gmail.com";
  }

  return (
      <div className="container">
        <Header />

        <Routes>
          {/* Define a route for the Home component */}
          <Route path="/portfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Project" element={<Projects />} />
        </Routes>
      </div>
  );
}

export default App;
