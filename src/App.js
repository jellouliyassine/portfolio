import React, { useEffect } from "react";
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
import HomeV2 from "./HomeV2";

function App() {
  function open(url) {
    window.open(url, "_blank");
  }

  function openGmail() {
    window.location.href = "mailto:yassine.jellouli.2001@gmail.com";
  }
  useEffect(() => {
    // Check if the page has been refreshed before
    if (!localStorage.getItem('refreshed')) {
        // Set the flag in local storage to indicate the page has been refreshed
        localStorage.setItem('refreshed', 'true');
        // Refresh the page
        window.location.reload();
    } else {
        // Optionally, clear the flag to allow future refreshes if needed
        localStorage.removeItem('refreshed');
    }
}, []);
console.log("refreched");
  return (
      <div className="container">
        <Header />

        <Routes>
          {/* Define a route for the Home component */}
         { //<Route path="/homev2" element={<HomeV2/>} />
         }
          <Route path="/portfolio" element={<HomeV2 />} />
          <Route path="/" element={<HomeV2 />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Project" element={<Projects />} />
        </Routes>
      </div>
  );
}

export default App;
