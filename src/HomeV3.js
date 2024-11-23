import React from "react";
import prf from "./prf.png";
import Card from "./Card";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { BsPuzzleFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import Skills2 from "./Skills2";
function HomeV3() {
  return (
    <div style={{ display: "flex", flexDirection: "column",width:"100vw" }}>
      <div
        className="item"
        style={{
          backgroundColor: "transparent",
          flexDirection:"column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: window.innerWidth < 1000 ? "80px" : "80px",
        }}
      >
        <img
          style={{
            margin: window.innerWidth < 600 ? "50px" : "10px",
            minWidth: window.innerWidth < 600 ? "200px" : "220px",
            "flex-shrink": "0.75",
            width: window.innerWidth < 600 ? "100px" : "230px",
            "max-width": "100%",
            border: "white solid 3px",
            borderRadius: "100%",
            padding: "4px",
          }}
          src={prf}
        />

        <div style={{paddingLeft:"5%",textAlign:window.innerWidth < 600 ? "none" :"center",paddingRight:"5%",display:"flex",height:"fit-content",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <div
            className="gradient-textv2"
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <span style={{ fontSize: "2.7rem" }}>
              Hi, I'm Yassine Jellouli, Software engineer
            </span>
          </div>
          <div
            style={{
              color: "#c1c0c0",
              "margin-bottom": "20px",
              fontSize: "20px",
            }}
          >
            <p style={{ color: "white", fontSize: "1.4rem" }}>
              A Software Engineer with a strong focus on creating value, adept
              at designing innovative solutions and resolving complex problems.
              Equipped with a critical mindset, I excel at analyzing challenges
              from multiple perspectives to develop effective and efficient
              software solutions.{" "}
            </p>
          </div>
          
        </div>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginTop:"-10px",
        }}
      >
        <Card
          name="Web app developer"
          logo={TbWorldWww}
          description="As a skilled web application developer, I specialize in building responsive, user-friendly applications. I have experience with modern frameworks like React and Angular, creating dynamic interfaces optimized for performance and accessibility. My expertise includes frontend and backend integration, ensuring seamless functionality across devices."
        />
        <Card
          name="Desktop app developer"
          logo={FaLaptopCode}
          description="I excel in developing robust and intuitive desktop applications tailored for various operating systems. My proficiency includes technologies like .NET, WPF, and cross-platform frameworks, ensuring reliable software solutions that meet user and business needs."
        />
        <Card
          name="Console app developer"
          logo={VscDebugConsole}
          description="As a console application developer, I design lightweight and efficient tools that deliver core functionality for specialized tasks. My focus is on performance, simplicity, and leveraging scripting and automation for optimal user solutions"
        />
        <Card
          name="Ai searcher"
          logo={FaBrain}
          description="Passionate about artificial intelligence, I actively explore machine learning, natural language processing, and AI-driven problem-solving. My work involves implementing AI models to address real-world challenges, focusing on innovation and cutting-edge technologies"
        />
        <Card
          name="Problems solver"
          logo={BsPuzzleFill}
          description="With a strong analytical mindset, I thrive on tackling complex challenges. I use my expertise in algorithms, system design, and efficient coding practices to devise creative and effective solutions for technical problems."
        />
      </div>
      
    </div>
  );
}
export default HomeV3;
