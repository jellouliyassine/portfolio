import React from "react";
import "./newcss.css";
import bc from "./o6i.gif";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GiFlexibleStar } from "react-icons/gi";
import { TbBackground } from "react-icons/tb";
//import images
import java from "./Java.png";
import html from "./html.png";
import css from "./css.png";
import Skill from "./Skill";
import Miniexperience2 from "./Miniexpeirence2";
function Experience2() {
  return (
    <div style={{ marginTop: "50px",height:"100%",backgroundColor:"rgba(26, 25, 25, 0.705)" ,paddingBottom:"20px"}}>
      <div className="Skills">
        <div
          style={{
            textAlign: "center",
            fontSize: "3rem",

            width:"100%"
          }}
        >
          <span className="colore" style={{padding: "10px"}} > Experience</span>
        </div>
        <div
          style={{
            display: "flex",
           marginTop:"50px",
            justifyContent: "center",
            alignItems:"center",
            flexDirection:"column",
           gap:"4vh",
      width:"100%",
      height: "100%"


          }}
        >
        <Miniexperience2 year1="10/12/24" year2="now" title="Full stack engineer" localisation="VaiSystems" description="Currently, I work as a full-stack engineer, where I am responsible for architecting solutions, building robust backend systems, and developing and training AI models. My role combines technical expertise in both software development and machine learning, allowing me to create scalable and efficient systems while incorporating advanced AI capabilities. I focus on delivering high-quality solutions that meet business needs and ensure smooth integration between different layers of the application."/>
        <Miniexperience2 year1="07/12/24" year2="11/23/24" title="Freelance project" localisation="Meknes" description="I led a freelance project focused on digital transformation for magazine companies, where I designed and implemented a tailored solution to fully digitize and optimize their workflows. This project streamlined their operations, improved efficiency, and supported their transition to modern digital systems."/>
        <Miniexperience2 year1="02/15/24" year2="09/14/24" title="Internship : Final Year Project" localisation="DXC Technology" description="Design and development of a project management application based on the Scrum framework, supporting projects throughout the value creation process, with analytical views that facilitate analysis and report generation for project managers, dedicated to DXC Technology Maroc."/>
        <Miniexperience2 year1="06/4/23" year2="09/12/23" title="Internship : Practicing  Knowledge" localisation="Meknes Prefecture" description="I developed a C# and .NET desktop application for configuring Cisco switches at the Prefecture. The app provided a user-friendly interface for network administrators to easily manage settings, automating tasks and improving network efficiency. This project enhanced my understanding of network protocols and their real-world application."/>
        <Miniexperience2 year1="06/14/22" year2="07/15/22" title="Internship : learning basics" localisation="Vamos Digital" description="During my internship at Vamos Digital, I focused on learning the basics of software development while creating a portfolio for the company. I gained hands-on experience in web development, helping to design and implement a professional portfolio that showcased the company's services and projects. This opportunity allowed me to strengthen my skills in web development and collaboration."/>

        </div>
       
      </div>
    </div>
  );
}
export default Experience2;
