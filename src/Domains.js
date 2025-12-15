import React from "react";
import "./newcss.css";
import Card from "./Card";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { BsPuzzleFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import Skills2 from "./Skills2";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { BsBorderTop, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { RiChatVoiceAiLine } from "react-icons/ri";

function Domains() {
  return (
    <div className="Domains">

      <div
        style={{
          textAlign: "center",


          width: "100%",
        }}
      >
        <span  style={{ fontSize: "clamp(23px, 4vw, 32px)",padding:"10px",backgroundColor:"#FF4D00",color:"rgba(255,255,255,0.8)",borderRadius:"10px",fontFamily:'"JetBrains Mono", monospace',color:"white",fontWeight:"bold",borderRadius:"5px"}}>
          Areas of Expertise
        </span>
      </div>


      <div
        style={{
          display:"flex",
          justifyContent: "center",
          alignItems:"center",
        gap:"50px",
        flexWrap:"wrap",
          width: "100%",
        




          boxSizing: "border-box",
        }}
      >
        <Card
          name="Web app developer"
          logo={TbWorldWww}
          description="As a skilled web application developer, I specialize in building responsive, user-friendly applications. I have experience with modern frameworks like React and Angular, creating dynamic interfaces optimized for performance and accessibility. My expertise includes frontend and backend integration, ensuring seamless functionality across devices."
        />
        <Card
          name="Desktop app developer"
          logo={FaLaptopCode}
          description="I excel in developing robust and intuitive desktop applications tailored for various operating systems. My proficiency includes technologies like .NET, WPF, and cross-platform frameworks, ensuring reliable full stack solutions that meet user and business needs."
        />
        <Card
          name="Console app developer"
          logo={VscDebugConsole}
          description="As a console application developer, I design lightweight and efficient tools that deliver core functionality for specialized tasks. My focus is on performance, simplicity, and leveraging scripting and automation for optimal user solutions"
        />
        <Card
          name="AI Developer"
          logo={FaBrain}
          description="As a full stack engineer , I develop intelligent voice and language solutions powered by NLP and large language models. I design and train systems that enhance VoIP applications with real-time understanding, automation, and adaptive communication, bridging the gap between human conversation and machine intelligence."
        />
        <Card
          name="Problems solver"
          logo={BsPuzzleFill}
          description="With a strong analytical mindset, I thrive on tackling complex challenges. I use my expertise in algorithms, system design, and efficient coding practices to devise creative and effective solutions for technical problems."
        />

        <Card
          name="VoIP Development"
          logo={RiChatVoiceAiLine}
          description="As a full stack engineer, I specialize in developing VoIP technologies that deliver reliable, high-quality voice communication. I design and implement real-time systems, optimize network protocols, and create scalable solutions that ensure seamless connectivity and performance across platforms."
        />
      </div>
    </div>
  );
}
export default Domains;
