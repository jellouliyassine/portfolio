import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import Miniexperience from "./Miniexperience";
import mks from "./meknes.jpg";
import ensa from "./ensa.jpg";
import vamos from "./vamos.jpg";
import pref from "./pref.jpg";
import dxc from "./dxc.jpg";
import wer from "./wherhouse.jpg";
import qube from "./qube.png";
import ddxc from "./scrum.jpg";
import msp from "./msp.png";
import traitement from "./processing.jpg";
import cisco from "./cisco.jpg";
import tictac from "./tic-tac-toe.png";
import { BsArrowReturnRight } from "react-icons/bs";
import Project from "./Project";
import Project2 from "./Project2";
import image from "./tf.jpg";

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
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              WearHouser
            </div>
            <Project2
              thecnologie=" Talend , Java , HTML , CSS , PL/SQL , SQL , JavaScript , Scrum"
              type="Personal Challenge"
              content={[
                "Design  a web interface to load client data ",
                "Use Talend  for data processing.",
                "Automate the creation of data warehouses",
                "Analytical views for streamlined business insights.",
              ]}
              img={wer}
            />
          </div>

          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Infinite Qube Problem Solving
            </div>
            <Project2
              thecnologie="Java , Problem Solving , Graph theory"
              type="Personal Challenge"
              content={[
                "Solution for the Tables-Infinite-Qube puzzle",
                "Use graph theory to implement the solution.",
              ]}
              img={qube}
            />
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Scrum Project Planing
            </div>
            <Project2
              thecnologie="Spring Boot ,Spring Security ,
                Spring ,
                React JS ,
                Junit ,
                java ,
                JavaScript ,
                MySQL ,
                Jenkins ,
                Scrum "
              type="Internship"
              content={[
                "Build a project management application based on the Scrum framework.",
                "Implement absence management system", " Implement real-time comment and notification systems", "Implement a calendar for event planning.",
                "Implement analytical views and auto report generation for project lifecycle analysis.",
              ]}
              img={ddxc}
            />
          </div>

          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              MSP Optimum Finder
            </div>
            <Project2
              thecnologie="Java , MSP"
              type="Personal Challenge"
              content={[
                "Develop a console application using the Statistical Process Control (SPC) method to optimize function coordinates for process improvement.",
                "Implement the solution in Java, focusing on precision and mathematical optimization.",
              ]}
              img={msp}
            />
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Roadmap Segmentation and Extraction
            </div>
            <Project2
              type="Personal Challenge"
              thecnologie="Java , MySQL , XML , Swing , OpenCV"
              content={[
                "Retrieve satellite images with a specified scale and apply filters for feature extraction.",
                "Map the optimal route and calculate the distance between two map points.",
              ]}
              img={traitement}
            />
          </div>

          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Cisco Switch Configurator
            </div>
            <Project2
              type="Internship"
              thecnologie=".Net , C# , Network protocols"
              content={[
                "Create a desktop application to configure Cisco switches",
                "Provide a streamlined solution for network management at the Government Institution Prefecture of meknes.",
                "Accelerate the switch configuration process by approximately 200% compared to manual CLI usage.",
              ]}
              img={cisco}
            />
          </div>

          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              TIC TAC TOE
            </div>
            <Project2
              type="Personal Challenge"
              thecnologie="Java , Problem Solving , Graph theory"
              content={[
                "Implement the Tic Tac Toe puzzle using Java, applying graph theory for intelligent move calculation and strategy.",
                "Ensure that the computer always wins or draws by optimizing game logic and designing competitive play.",
              ]}
              img={tictac}
            />
          </div>

          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Digital Transformation of Magazines
            </div>
            <Project2
              type="Freelance"
              thecnologie=".Net , C# , SQLite"
              content={[
                "Lead a freelance project focused on digitizing and optimizing workflows for magazine companies to enhance operational efficiency and streamline business processes.",
                "Automating key operations and improving overall workflow management.",
                "Incorporate features to track client orders, manage providers, automate profit calculations, and monitor payment operations, providing a seamless and efficient management system.",
              ]}
              img={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects2;
