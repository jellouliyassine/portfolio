import React from "react";
import prf from "./prf.png";
import Card from "./Card";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { BsPuzzleFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
function HomeV3() {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"-60px"}}>
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
       padding:"2%",
        
      }}
      className="item"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          maxWidth: "40%",
          width: "fit-content",
        }}
      >
        <img
          style={{marginTop:window.innerWidth<600?"100px":"10px",minWidth:window.innerWidth<600?"200px":"220px","flex-shrink": "0.75", width:window.innerWidth<600?"100px":"350px" , "max-width": "100%",border:"white solid 3px",borderRadius:"100%",padding:"4px" }}
          src={prf}
        />
      </div>

      <div style={{ padding: "5%" }}>
        <div
          className="gradient-textv2"
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <span style={{ fontSize: "2.8rem" }}>
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
          <p style={{ color: "white", fontSize: "1.5rem" }}>
            A Software Engineer with a strong focus on creating value, adept at
            designing innovative solutions and resolving complex problems.
            Equipped with a critical mindset, I excel at analyzing challenges
            from multiple perspectives to develop effective and efficient
            software solutions.{" "}
          </p>
        </div>
        <span className="morebt">Read more</span>
      </div>
     
    </div>
 <div style={{display:"flex",justifyContent:"center",gap:"10px",flexWrap:"wrap"}}>
 <Card name="Web app developer" logo={TbWorldWww} description="As a skilled web application developer, I specialize in building responsive, user-friendly applications. I have experience with modern frameworks like React and Angular, creating dynamic interfaces optimized for performance and accessibility. My expertise includes frontend and backend integration, ensuring seamless functionality across devices." />
 <Card name="Desktop app developer" logo={FaLaptopCode} description="I excel in developing robust and intuitive desktop applications tailored for various operating systems. My proficiency includes technologies like .NET, WPF, and cross-platform frameworks, ensuring reliable software solutions that meet user and business needs." />
 <Card name="Console app developer" logo={VscDebugConsole} description="As a console application developer, I design lightweight and efficient tools that deliver core functionality for specialized tasks. My focus is on performance, simplicity, and leveraging scripting and automation for optimal user solutions"/>
 <Card name="Ai searcher" logo={FaBrain} description="Passionate about artificial intelligence, I actively explore machine learning, natural language processing, and AI-driven problem-solving. My work involves implementing AI models to address real-world challenges, focusing on innovation and cutting-edge technologies" />
 <Card name="Problems solver" logo={BsPuzzleFill}  description="With a strong analytical mindset, I thrive on tackling complex challenges. I use my expertise in algorithms, system design, and efficient coding practices to devise creative and effective solutions for technical problems."  />

 </div>
 </div>

  );
}
export default HomeV3;
