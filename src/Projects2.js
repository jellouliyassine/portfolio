import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import Miniexperience from "./Miniexperience";
import mks from "./meknes.jpg";
import ensa from "./ensa.jpg";
import vamos from "./vamos.jpg";
import pref from "./pref.jpg";
import dxc from "./dxc.jpg";
import wer from "./wer.png";
import qube from "./qube.jpg";
import ddxc from "./ddxc.png";
import msp from "./msp.png";
import traitement from "./traitement.png";
import cisco from "./cisco.jpg";
import tictac from "./tictac.png";
import { BsArrowReturnRight } from "react-icons/bs";
import Project from "./Project";
import Project2 from "./Project2";
import image from "./image.png"

function Projects2() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="projects">
        <div
          style={{
            textAlign: "center",
        
            fontSize: "3rem",

            width: "100%",
          }}
        >
          <span className="colore" style={{ padding: "30px" }}>
            {" "}
            Projects
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "50px",

            justifyContent: "center",

            gap: "15px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Project2
              content={[
                "Talend",
                "Java",
                "HTML",
                "CSS",
                "PL/SQL",
                "SQL",
                "JavaScript",
                "Scrum",
              ]}
              txt="Developed a project idea for a company dedicated to creating data warehouses"
              title="WearHouser"
              img={wer}
            />
          </div>

          <div>
            <Project2
              content={["Java", "Problem Solving", "Graph theory"]}
              txt="Implementing a solution for the Tables-Infinite-Qube  puzzle using Java and graph theory "
              title="Infinite Qube Problem Solving Mini Game"
              img={qube}
            />
          </div>
          <div>
            <Project2
              content={[
                "Spring Boot",
                "Spring Security",
                "Spring",
                "React JS",
                "Junit",
                "java",
                "JavaScript",
                "MySQL",
                "Jenkins",
                "Scrum",
              ]}
              txt=" Designed and developed a project management application based on the Scrum
framework, supporting projects throughout the value creation process, with analytical
views to facilitate analysis and report generation for project managers at DXC
Technology Morocco"
              title="Scrum Project Planing"
              img={ddxc}
            />
          </div>

          <div>
            <Project2
              content={["Java", "MSP"]}
              txt="Using the Statistical Process Control (SPC) method to create a console program that automatically retrieves the optimal coordinates of a given function that describes a process, for minimizing or maximizing the function value."
              title="MSP Optimum Finder"
              img={msp}
            />
          </div>
          <div>
            <Project2
              content={["Java", "MySQL", "XML", "Swing", "OpenCV"]}
              txt="Retrieve satellite images with a specified scale, apply filters, extract elements, and then map optimal routes and
paths"
              title="Roadmap Segmentation and Extraction"
              img={traitement}
            />
          </div>

          <div>
            <Project2
              content={[".Net", "C#", "Network protocols"]}
              txt=" Developed a desktop application using C# and the .NET framework for configuring
Cisco switches used by the prefecture."
              title="Cisco Switch Configurator"
              img={cisco}
            />
          </div>

          <div>
            <Project2
              content={["Java", "Problem Solving", "Graph theory"]}
              txt="Implementing a solution for the TIC_TAC_TOE puzzle using Java and graph theory"
              title="TIC TAC TOE"
              img={tictac}
            />
          </div>

          <div>
            <Project2
              content={[".Net", "C#", "SQLite"]}
              txt="Freelance project on digital transformation for magazine companies, involving the implementation of a solution to fully digitize and optimize their workflows."
              title="Digital Transformation of Magazines"
              img={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects2;
