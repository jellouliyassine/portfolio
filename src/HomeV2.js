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
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function HomeV2() {
  function open(url) {
    window.open(url, "_blank");
  }
  function openGmail() {
    window.location.href = "mailto:yassine.jellouli.2001@gmail.com";
  }
  return (
    <div className="homecontainer">
      <div className="paagev2">
        <div className="head">
          <button
            style={{
              margin: "1%",
              display: "flex",
              "align-items": "center",
              borderRadius: "50px",
              "background-color": "#1c212b",
              border: " #00b386  solid 1px",
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
                  color: " #00b386 ",
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
              border: " #00b386  solid 1px",
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
                  color: " #00b386 ",
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
              border: " #00b386  solid 1px",
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
                  color: " #00b386 ",
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
              border: " #00b386  solid 1px",
            }}
          >
            <div>
              <FaSquarePhone
                size={35}
                style={{
                  "border-radius": "50%",
                  "background-color": "#1c212b",
                  color: " #00b386 ",
                }}
              />
            </div>
            <div style={{ padding: "5px", color: "#c1c0c0" }}>
              +212 693070482
            </div>
          </button>
        </div>
        <div className="inerheaderv2">
          <div>
            <div
              className="gradient-textv2"
              style={{
                display: "flex",

                justifyContent: "flex-start",
                "flex-wrap": "wrap",
              }}
            >
              <span>
              Hi, I'm Yassine Jellouli, a software engineer, a full-stack developer, and a problem solver.{" "}
              </span>
            </div>
            <div
              style={{
                color: "#c1c0c0",
                "margin-bottom": "20px",
                fontSize: "20px",
              }}
            >
              <p>
                A Software Engineer with a strong focus on creating value, adept
                at designing innovative solutions and resolving complex
                problems. Equipped with a critical mindset, I excel at analyzing
                challenges from multiple perspectives to develop effective and
                efficient software solutions.{" "}
              </p>
            </div>
          </div>
          <h1 style={{marginBottom:"-20px",marginLeft:"8px",marginRight:"8px",backgroundColor:"#1c212b",zIndex:"1"}}>Values</h1>
          <div style={{ border: "#00b386 solid 1px", width:"fit-content",borderRadius:"10px",padding:"60px"}}>
       
            <div
              style={{
               
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                color: "  #00b386  ",
                gap: "40px",
                flexWrap: "wrap",
                flexShrink: "1",
                width: "100%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <GiTeamIdea size={100} style={{ color: "  #00b386  " }} />
                <br></br>
                <b>Teamworck</b>
              </div>

              <div style={{ textAlign: "center" }}>
                <GiBrain size={100} style={{ color: "  #00b386  " }} />
                <br></br>
                <b>Critical thinking</b>
              </div>
              <div style={{ textAlign: "center" }}>
                <GiFlexibleStar size={100} style={{ color: "  #00b386  " }} />
                <br></br>
                <b>Dynamic</b>
              </div>
            </div>
          </div>
       
          <div>


          </div>
          <h1 style={{marginBottom:"-20px",marginLeft:"8px",marginRight:"8px",backgroundColor:"#1c212b",zIndex:"1"}}>Skills</h1>

          <div style={{ border: "#00b386 solid 1px", width:"fit-content",borderRadius:"10px",padding:"60px"}}>


          <div
        
            style={{
              "margin-top": "-14px",
              color: "#c1c0c0",
             marginLeft:"-20px",
             fontSize:"20px",  
            }}
          >
            <ul >
              <li>
                <span style={{ color: " #00b386 " }}>Programming :</span>{" "}
                javaEE,Java,HTML,CSS,PL/SQL,SQL,JavaScript.
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>Databases</span> MySQL , MongoDB ,
                Oracle.
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>Frameworks</span> Spring
                Boot,Spring Security,Spring,React JS,Junit
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>Networks</span>{" "}
                Protocol,configuration des appareille CISCO,administration
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>DevOps </span> Git,Jenkins
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>Other Tools</span>{" "}
                OrangeBI,TalendETL,Linux{" "}
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>Methodologies</span> Scrum , IHM
                (InterfaceHomme‑Machine) , DesignPatterns
              </li>
              <li>
                <span style={{ color: " #00b386 " }}>Languages</span> Arabic ( 
                <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} /> )
                , English (
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStarHalfAlt
                    style={{ marginLeft: "3px", color: " #00b386 " }}
                  />
                  <FaRegStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                ),French (
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                  <FaStarHalfAlt
                    style={{ marginLeft: "3px", color: " #00b386 " }}
                  />
                  <FaRegStar style={{ marginLeft: "3px", color: " #00b386 " }} />
                ) 
              </li>
            </ul>
          </div>




          <div>










          </div>
        </div>

      </div>

    

       
        

      
      </div>
      <br></br>
    </div>
  );
}

export default HomeV2;
