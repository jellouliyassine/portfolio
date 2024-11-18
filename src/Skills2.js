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
function Skills2() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="Skills">
        <div
          style={{


            textAlign: "center",
            fontSize: "3rem",

            width:"100%"
          }}
        >
          <span className="colore" style={{padding: "40px",}} > Skills</span>
        </div>
        <div
          style={{
            display: "flex",
           marginTop:"20px",
            justifyContent: "center",
            flexDirection:"column",
            gap: "5px",
      width:"100%",


          }}
        >
          <Skill
            name="Programming"
            Description="javaEE , Java , HTML , CSS , PL/SQL , SQL, JavaScript , C# , Python"
          />
          <Skill
            name="Databases"
            Description="MySQL , MongoDB ,
            Oracle"
          />
           <Skill
            name="Frameworks"
            Description="Spring Boot, Spring Security , Spring , React, Angular , Asterisk , .Net"
          />
           <Skill
            name="Tools"
            Description="Git , Jenkins , OrangeBI , TalendETL , Linux"
          />
           <Skill
            name="Methodologies"
            Description="Scrum , IHM (InterfaceHomme‑Machine) , DesignPatterns"
          />

          <Skill
            name="Test"
            Description="Junit , Mockito "
          />
           <Skill
            name="Languages"
            Description="Arabic , English ,
            French"
          />
        </div>
      </div>
    </div>
  );
}
export default Skills2;
