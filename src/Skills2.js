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
import { FaBrain } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { SiOracle } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiAsterisk } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiTalend } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { DiScrum } from "react-icons/di";
import { SiJunit5 } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { RiDrinks2Fill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiJira } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiFastapi } from "react-icons/si";
//import images

import java from "./Java.png";
import html from "./html.png";
import css from "./css.png";
import Skill from "./Skill";
function Skills2() {
  return (
    <div className="Skills">
      <div
        style={{
          textAlign: "center",

          width: "100%",
        }}
      >
        <span style={{ fontSize: "clamp(23px, 4vw, 32px)", padding: "10px", backgroundColor: "#FFC226", color: "rgba(255,255,255,0.8)", borderRadius: "10px", fontFamily: '"JetBrains Mono", monospace', color: "white", fontWeight: "bold", borderRadius: "5px" }}>
          Skills
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "10px",
          width: "100%",
          flexWrap: "wrap",
          padding: "10px",
          boxSizing: "border-box"
        }}
      >
        <Skill name="Asterisk" logo={SiAsterisk} color="#ff5c00" />
        <Skill name="Fastapi" logo={SiFastapi} color="#40E4FF" />
        <Skill name="Spring Boot" logo={SiSpringboot} color="green" />
        <Skill name="React" logo={FaReact} color="lightblue" />
        <Skill name=".Net" logo={AiOutlineDotNet} color="#009fff" />
        <Skill name="Junit" logo={SiJunit5} color="#00d712" />
        <Skill name="Maven" logo={SiApachemaven} color="#fdcd00" />
        <Skill name="Mockito" logo={RiDrinks2Fill} color="#00fd70" />
        <Skill name="Scrum" logo={DiScrum} color="#00ff15" />

        <Skill name="Java" logo={FaJava} color="red" />
        <Skill name="HTML" logo={FaHtml5} color="orange" />
        <Skill name="CSS" logo={IoLogoCss3} color="#36acff" />
        <Skill name="JavaScript" logo={RiJavascriptFill} color="yellow" />
        <Skill name="C#" logo={TbBrandCSharp} color="#366eff" />
        <Skill name="Python" logo={FaPython} color="orange" />
        <Skill name="MySQL" logo={SiMysql} color="#ffa936" />
        <Skill name="Oracle" logo={SiOracle} color="orange" />
        <Skill name="MongoDB" logo={SiMongodb} color="green" />

        <Skill name="Linux" logo={FcLinux} />
        <Skill name="Git" logo={FaGitAlt} color="orange" />
        <Skill name="Jenkins" logo={FaJenkins} color="#ffb700" />
        <Skill name="Talend" logo={SiTalend} color="red" />
        <Skill name="Jira" logo={SiJira} color="#207fff" />
        <Skill name="Github" logo={FaGithub} color="#ffb033" />
        <Skill name="Docker" logo={FaDocker} color="#0340FF" />

      </div>
    </div>
  );
}
export default Skills2;
