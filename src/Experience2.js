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
    <div
      style={{
        marginTop: "50px",
        height: "100%",
        backgroundColor: "rgba(26, 25, 25, 0.705)",
        paddingBottom: "20px",
      }}
    >
      <div className="Skills">
        <div
          style={{
            textAlign: "center",
            fontSize: "3rem",

            width: "100%",
          }}
        >
          <span className="colore" style={{ padding: "10px" }}>
            {" "}
            Experience
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "4vh",
            width: "fit-content",
            height: "100%",
            
          }}>
          <Miniexperience2
            year1="10/12/24"
            year2="now"
            title="Full stack engineer"
            localisation="VaiSystems"
            description={[
              "Responsible for architecting solutions, building robust backend systems, and developing and training AI models",
              "Combine expertise in software development and machine learning to create scalable, efficient systems with advanced AI capabilities.",
              "Focus on delivering high-quality solutions that meet business needs and ensure seamless integration between application layers.",
            ]}
          />
          <Miniexperience2
            year1="07/12/24"
            year2="11/23/24"
            title="Freelance project"
            localisation="Meknes"
            description={[
              "Lead a digital transformation project for magazine companies",
              "Design and implement tailored solutions to digitize and optimize workflows.",
              "Streamline operations, improve efficiency, and support transitions to modern digital systems.",
            ]}
          />
          <Miniexperience2
            year1="02/15/24"
            year2="09/14/24"
            title="Internship : Final Year Project"
            localisation="DXC Technology"
            description={[
              "Design and develop a project management application based on the Scrum framework.",
              "Support project lifecycle management with analytical views for easy analysis and reporting.",
              "Deliver solutions tailored to DXC Technology Maroc's needs.",
            ]}
          />
          <Miniexperience2
            year1="06/4/23"
            year2="09/12/23"
            title="Internship : Practicing  Knowledge"
            localisation="Meknes Prefecture"
            description={[
              "Develop a C# and .NET desktop application for configuring Cisco switches.",
              "Provide a user-friendly interface for network administrators to manage settings.",
              "Automate tasks to improve network efficiency and deepen knowledge of network protocols.",
            ]}
          />
          <Miniexperience2
            year1="06/14/22"
            year2="07/15/22"
            title="Internship : learning basics"
            localisation="Vamos Digital"
            description={[
              "Gain foundational experience in web development",
              "Design and implement a professional portfolio for the company.",
              "Strengthen web development skills and collaboration abilities.",
            ]}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience2;
