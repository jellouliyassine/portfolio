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
import { SiCsharp } from "react-icons/si";
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

            width: "100%",
          }}
        >
          <span className="colore" style={{ padding: "40px" }}>
            {" "}
            Skills
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
            gap: "5px",
            width: "100%",
            flexWrap:"wrap"
          }}
        >
          <Skill name="Java" logo={FaJava} color="red" />
          <Skill name="HTML" logo={FaHtml5} color="orange" />
          <Skill name="CSS" logo={IoLogoCss3} color="#36acff" />
          <Skill name="JavaScript" logo={RiJavascriptFill} color="yellow" />
          <Skill name="C#" logo={SiCsharp} color="#366eff" />
          <Skill name="MySQL" logo={SiMysql} color="#ffa936" />
          <Skill name="Oracle" logo={SiOracle} color="orange" />
          <Skill name="MongoDB" logo={SiMongodb} color="green" />
          <Skill name="Spring Boot" logo={SiSpringboot} color="green" />
          <Skill name="React" logo={FaReact} color="lightblue" />
          <Skill name="Angular" logo={FaAngular} color="#e64444" />
          <Skill name="Asterisk" logo={SiAsterisk} color="#ff5c00" />
          <Skill name=".Net" logo={AiOutlineDotNet} color="#009fff" />
          <Skill name="Git" logo={FaGitAlt}  color="orange"/>
          <Skill name="Jenkins" logo={FaJenkins} color="#ffb700" />
          <Skill name="Talend" logo={SiTalend} color="red" />
          <Skill name="Linux" logo={FcLinux} />
          <Skill name="Scrum" logo={DiScrum} color="#00ff15" />
          <Skill name="Junit" logo={SiJunit5} color="#00d712" />
          <Skill name="Maven" logo={SiApachemaven} color="#fdcd00" />
          <Skill name="Mockito" logo={RiDrinks2Fill} color="#00fd70"/>
          <Skill name="Arabic" logo={IoLanguage} color="#207fff"/>
          <Skill name="English" logo={IoLanguage} color="#207fff" />
          <Skill name="French" logo={IoLanguage} color="#207fff" />
        </div>
      </div>
    </div>
  );
}
export default Skills2;
