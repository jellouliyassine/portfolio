import logo from "./me.jpg";
import React from "react";
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
import { GiTeamIdea } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GiFlexibleStar } from "react-icons/gi";

function Home() {
  function open(url) {
    window.open(url, "_blank");
  }
  function openGmail() {
    window.location.href = "mailto:yassine.jellouli.2001@gmail.com";
  }
  return (
    <div className="homecontainer">
      <div className="paage">
        <div className="head">
          <button
            style={{
              margin: "1%",
              display: "flex",
              "align-items": "center",
              borderRadius: "50px",
              "background-color": "#1c212b",
              border: "#ec2471 solid 1px",
            }}
            onClick={() => {
              open("https://www.linkedin.com/in/yassine-jellouli-8241b2299/");
            }}
          >
            <div>
              <BsLinkedin
                size={35}
                style={{
                  "border-radius": "50%",
                  "background-color": "#1c212b",
                  color: "#ec2471",
                }}
              />
            </div>
            <div style={{ padding: "5px", color: "#c1c0c0" }}>
              yassinejelloui
            </div>
          </button>

          <button
            style={{
              margin: "1%",
              display: "flex",
              "align-items": "center",
              borderRadius: "50px",
              "background-color": "#1c212b",
              border: "#ec2471 solid 1px",
            }}
            onClick={() => {
              openGmail();
            }}
          >
            <div>
              <SiGmail
                size={35}
                style={{
                  "border-radius": "50%",
                  "background-color": "#1c212b",
                  color: "#ec2471",
                }}
              />
            </div>
            <div style={{ padding: "5px", color: "#c1c0c0" }}>
              yassine.jellouli.2001@gmail.com
            </div>
          </button>

          <button
            style={{
              margin: "1%",
              display: "flex",
              "align-items": "center",
              borderRadius: "50px",
              "background-color": "#1c212b",
              border: "#ec2471 solid 1px",
            }}
            onClick={() => {
              open("https://github.com/yassinejellouli");
            }}
          >
            <div>
              <FaGithubSquare
                size={35}
                style={{
                  "border-radius": "50%",
                  "background-color": "#1c212b",
                  color: "#ec2471",
                }}
              />
            </div>
            <div style={{ padding: "5px", color: "#c1c0c0" }}>
              yassinejelloui
            </div>
          </button>

          <button
            style={{
              margin: "1%",
              display: "flex",
              "align-items": "center",
              borderRadius: "50px",
              "background-color": "#1c212b",
              border: "#ec2471 solid 1px",
            }}
          >
            <div>
              <FaSquarePhone
                size={35}
                style={{
                  "border-radius": "50%",
                  "background-color": "#1c212b",
                  color: "#ec2471",
                }}
              />
            </div>
            <div style={{ padding: "5px", color: "#c1c0c0" }}>
              +212 693070482
            </div>
          </button>
        </div>
        <div className="inerheader">
          <div>
            <div
              className="gradient-text2"
              style={{
                textAlign: "center",
                "flex-wrap": "wrap",
              }}
            >
              <span style={{ "font-size": "30px" }}>Yassine Jellouli</span>
              <br></br>
              <span className="gradient-text"> Software Engineer</span>
            </div>
            <br></br>
            <div className="des">
              <div
                style={{
                  color: "#c1c0c0",
                  "margin-bottom": "20px",
                }}
              >
                A Software Engineer with a strong focus on creating value, adept
                at designing innovative solutions and resolving complex
                problems. Equipped with a critical mindset, I excel at analyzing
                challenges from multiple perspectives to develop effective and
                efficient software solutions{" "}
              </div>
            </div>
          </div>

          <div
            style={{
              margin: "1%",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              color: "#ec2471",
              gap: "40px",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <GiTeamIdea size={100} style={{ color: "#ec2471" }} />
              <br></br>
              <b>Teamworck</b>
            </div>

            <div style={{ textAlign: "center" }}>
              <GiBrain size={100} style={{ color: "#ec2471" }} />
              <br></br>
              <b>Critical thinking</b>
            </div>
            <div style={{ textAlign: "center" }}>
              <GiFlexibleStar size={100} style={{ color: "#ec2471" }} />
              <br></br>
              <b>Dynamic</b>
            </div>
          </div>
        </div>
      </div>

      <div className="cnt">
        <div>
          <div
            style={{
              "font-weight": "bold",
              color: "#c1c0c0",
              padding: "6px",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              borderRadius: "50px",
              "background-color": "#ec2471",
              border: "#ec2471 solid 1px",
              "border-bottom-left-radius": "90%",
              "border-bottom-right-radius": "90%",
            }}
          >
            {" "}
            Skills
          </div>
          <div
            className="triks"
            style={{
              "margin-top": "-14px",
              color: "#c1c0c0",
              border: "#ec2471 solid 1px",
              "border-top": "unset",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              padding: "8px",
              "border-bottom-left-radius": "90%",
              "border-bottom-right-radius": "90%",
              "padding-bottom": "10%",
            }}
          >
            <ul style={{ margin: "20px" }}>
              <li>
                <b style={{ color: "#ec2471" }}>Programming</b>{" "}
                javaEE,Java,HTML,CSS,PL/SQL,SQL,JavaScript.
              </li>
              <li>
                <b style={{ color: "#ec2471" }}>Databases</b> MySQL , MongoDB ,
                Oracle.
              </li>
              <li>
                <b style={{ color: "#ec2471" }}>Frameworks</b> Spring
                Boot,Spring Security,Spring,React JS,Junit
              </li>
              <li>
                <b style={{ color: "#ec2471" }}>Networks</b>{" "}
                Protocol,configuration des appareille CISCO,administration
              </li>
              <li>
                <b style={{ color: "#ec2471" }}>DevOps </b> Git,Jenkins
              </li>
              <li>
                <b style={{ color: "#ec2471" }}>Other Tools</b>{" "}
                OrangeBI,TalendETL,Linux{" "}
              </li>
              <li>
                <b style={{ color: "#ec2471" }}>Methodologies</b>{" "}
                Scrum,IHM(InterfaceHomme‑Machine),DesignPatterns
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div
            style={{
              "font-weight": "bold",
              color: "#c1c0c0",
              padding: "6px",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              borderRadius: "50px",
              "background-color": "#ec2471",
              border: "#ec2471 solid 1px",
              "border-bottom-left-radius": "90%",
              "border-bottom-right-radius": "90%",
            }}
          >
            {" "}
            Languages
          </div>
          <div
            className="triks"
            style={{
              "margin-top": "-14px",
              color: "#c1c0c0",
              border: "#ec2471 solid 1px",
              "border-top": "unset",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              padding: "8px",
              "border-bottom-left-radius": "90%",
              "border-bottom-right-radius": "90%",
              "padding-bottom": "10%",
            }}
          >
            <ul style={{ margin: "20px" }}>
              <li>
                <span
                  style={{
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "flex-end",
                  }}
                >
                  <b style={{ color: "#ec2471", marginRight: "auto" }}>
                    Arabic
                  </b>{" "}
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                </span>
              </li>
              <li>
                <span
                  style={{
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "flex-end",
                  }}
                >
                  <b style={{ color: "#ec2471", marginRight: "auto" }}>
                    English
                  </b>{" "}
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStarHalfAlt
                    style={{ marginLeft: "3px", color: "#ec2471" }}
                  />
                  <FaRegStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                </span>
              </li>
              <li>
                <span
                  style={{
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "flex-end",
                  }}
                >
                  <b style={{ color: "#ec2471", marginRight: "auto" }}>
                    French
                  </b>{" "}
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                  <FaStarHalfAlt
                    style={{ marginLeft: "3px", color: "#ec2471" }}
                  />
                  <FaRegStar style={{ marginLeft: "3px", color: "#ec2471" }} />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div
            style={{
              "font-weight": "bold",
              color: "#c1c0c0",
              padding: "6px",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              borderRadius: "50px",
              "background-color": "#ec2471",
              border: "#ec2471 solid 1px",
              "border-bottom-left-radius": "90%",
              "border-bottom-right-radius": "90%",
            }}
          >
            {" "}
            Projects
          </div>
          <div
            className="triks"
            style={{
              "margin-top": "-14px",
              color: "#c1c0c0",
              border: "#ec2471 solid 1px",
              "border-top": "unset",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              padding: "8px",
              "border-bottom-left-radius": "90%",
              "border-bottom-right-radius": "90%",
              "padding-bottom": "10%",
            }}
          >
            <ul style={{ margin: "20px" }}>
              <li>
                <a href="/Project#p1">
                  <b style={{ color: "#ec2471" }}>WearHouser</b>{" "}
                </a>
              </li>
              <li>
                <a href="/Project#p2">
                  <b style={{ color: "#ec2471" }}>
                    3-tables-infinite-qube-problem-solving
                  </b>
                </a>
              </li>

              <li>
                <a href="/Project#p3">
                  <b style={{ color: "#ec2471" }}>ScrunProjectPlaning</b>
                </a>
              </li>

              <li>
                <a href="/Project#p4">
                  <b style={{ color: "#ec2471" }}>MSP_Planification_Optimum</b>{" "}
                </a>
              </li>
              <li>
                <a href="/Project#p5">
                  <b style={{ color: "#ec2471" }}>
                    Roadmap-Segmentation-and-Extraction-from-Satellite-Images
                  </b>
                </a>
              </li>
              <li>
                <a href="/Project#p6">
                  <b style={{ color: "#ec2471" }}>switch_cnfig</b>{" "}
                </a>
              </li>
              <li>
                <a href="/Project#p7">
                  <b style={{ color: "#ec2471" }}>TIC_TAC_TOE_java_minmax</b>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Home;
