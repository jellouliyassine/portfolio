import React from "react";
import prf from "./try.jpg";
import Card from "./Card";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { BsPuzzleFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import Skills2 from "./Skills2";
import { color, motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { BsBorderTop, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import "./newcss.css";

function HomeV3() {
  function open(url) {
    window.open(url, "_blank");
  }
  function openGmail() {
    window.location.href = "mailto:yassine.jellouli.2001@gmail.com";
  }
  return (
    <div
      // Animate when in view
      style={{ display: "flex", flexDirection: "column", width: "100vw"}}
      className="space">

      <div
        className="item"
        style={{
          backgroundColor: "transparent",
          width: "100%",
          minHeight: "90dvh",
          height:"90dvh",
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: window.innerWidth < 1000 ? "80px" : "80px",
          position: "relative",
          boxSizing: "border-box",
          padding: "10%",
          boxSizing:"border-box"

        }}
      >

        <motion.div
          initial={{ scale: 0 }}              // Start small
          whileInView={{ scale: 1 }}           // Grow to normal when in view
          transition={{ duration: 0.5 }}       // Smooth animation
          viewport={{ once: false, amount: 0.5 }}  // Animate on scroll, when 50% visible

          style={{ paddingLeft: "5%", textAlign : "center", paddingRight: "5%", display: "flex", height: "fit-content", justifyContent: "center", alignItems: "center", flexDirection: "column", flex: "1", "backdrop-filter": "blur(10px)", padding: "20px", boxSizing: "border-box", borderRadius: "5px",  minHeight: "200px", minWidth: "400px",boxSizing:"border-box" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems:"center",
              color:"#FF2626",
              fontWeight:"bold",
              fontFamily:"monospace"
            }}
          >
            <span style={{ fontSize: "clamp(20px, 4vw, 32px)",boxSizing:"border-box"}}>
              Yassine Jellouli <spam style={{backgroundColor:"#FF2626",color:"rgba(255,255,255,0.8)",borderRadius:"10px",padding:"10px",whiteSpace: "nowrap",display: "inline-block",boxSizing:"border-box"}}> Full Stack Engineer</spam>
            </span>
          </div>
          <div
            style={{
              color: "#c1c0c0",
              "margin-bottom": "20px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              boxSizing:"border-box"
            }}
          >
              <p style={{ color: "white",fontFamily: '"JetBrains Mono", monospace', fontSize: "clamp(16px, 2.5vw, 20px)", textAlign: "left", "word-break": "break-all",fontWeight: "400",maxWidth:"90%",color:"rgba(255,255,255,0.8)" ,boxSizing:"border-box"}}>
                Full Stack Engineer with a strong focus on creating value, adept
                at designing innovative solutions and resolving complex problems.
                Equipped with a critical mindset, I excel at analyzing challenges
                from multiple perspectives to develop effective and efficient
                software solutions.{" "}
              </p>
          </div>

        </motion.div>
        {/* <motion.div
          initial={{ scale: 0 }}              // Start small
          whileInView={{ scale: 1 }}           // Grow to normal when in view
          transition={{ duration: 0.5 }}       // Smooth animation
          viewport={{ once: false, amount: 0.5 }} style={{ display: "flex", flex: "1", justifyContent: "center", alignItems: "center", flexDirection: "column", "backdrop-filter": "blur(10px)", boxSizing: "border-box", gap: "15px", height: "200px", border: "solid 1px rgba(255,255,255,0.5)", borderRadius: "10px", minWidth: "400px" }}>

          <div style={{ display: "flex", justifyContent: "space-between", width: "90%", fontSize: "30px", fontWeight: "bold", color: "white" }}>
            <span>Expertise Level</span>

          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "90%", color: "white" }}>
            <span>Junior</span>
            <span>Intermediate</span>
            <span>Senior</span>

          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "82%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "50%", borderBottom: "4px solid white", color: "white", fontWeight: "bold" }}>
              <span>|</span>
              <span>|</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}              // Start small
          whileInView={{ scale: 1 }}           // Grow to normal when in view
          transition={{ duration: 0.5 }}       // Smooth animation
          viewport={{ once: false, amount: 0.5 }} style={{ width: "100%", color: "white", fontSize: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ "-webkit-text-stroke": "1px gray", "text-stroke": "2px white" }}>
            Contacts
          </div>
          <div
            style={{
              maxWidth: "400px",
              alignItems: "center",
              color: "white",
              display: "flex",
              backgroundColor: "transparent",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <BsLinkedin
              size={50}

              className="iicon"
              style={{ padding: "14px" }}
              onClick={() => {
                open("https://www.linkedin.com/in/yassine-jellouli-8241b2299/");
              }}
            />
            <FaGithubSquare
              size={57}
              className="iicon"
              onClick={() => {
                open("https://github.com/jellouliyassine");
              }}
            />
            <ImMail
              size={52}
              className="iicon"
              style={{ padding: "14px" }}
              onClick={() => {
                openGmail();
              }}
            />
          </div>
          </motion.div> */}
        <div
          style={{ width: "100%", color: "white", fontSize: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" ,boxSizing:"border-box"}}>

          <div
            style={{
              maxWidth: "400px",
              alignItems: "center",
              color: "#FF2626",
              display: "flex",
              backgroundColor: "transparent",
              justifyContent: "center",
              gap: "5px",
              boxSizing:"border-box"
            }}
          >
            <BsLinkedin
              size={30}

              className="iicon"
              style={{ padding: "14px" }}
              onClick={() => {
                open("https://www.linkedin.com/in/yassine-jellouli-8241b2299/");
              }}
            />
            <FaGithubSquare
              size={37}
              className="iicon"
              onClick={() => {
                open("https://github.com/jellouliyassine");
              }}
            />
            <ImMail
              size={32}
              className="iicon"
              style={{ padding: "14px" }}
              onClick={() => {
                openGmail();
              }}
            />
          </div>
          </div>

      </div>


    </div>
  );
}
export default HomeV3;
