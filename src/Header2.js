import React,{ useRef } from "react";
import { BsBorderTop, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import "./newcss.css";

function Header2({hr,sr,er,pr}) {
  const scrollToDiv = (reef) => {
    if (reef.current) {
      reef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  function open(url) {
    window.open(url, "_blank");
  }
  function openGmail() {
    window.location.href = "mailto:yassine.jellouli.2001@gmail.com";
  }
  return (
    <div  className="backhead">
    <div
      style={{
        
        alignItems: "center",
        fontSize: "1.3rem",
        padding: "10px",
        color: "white",
        height:"30px",
       
        display: "flex",
        backgroundColor: "rgb(26, 25, 25)",
        justifyContent: window.innerWidth < 600 ? "center" : "flex-end",
        gap: window.innerWidth < 600 ? "5px" : "30px",
      }}
    >
      <span
        style={{
          cursor: "pointer",
          border: window.innerWidth < 600 ? "solid 1px white" : "none",
          padding: window.innerWidth < 600 ? "6px" : "none",
          borderRadius: window.innerWidth < 600 ? "8px" : "none",
        }}
        className="headerbtn"
      onClick={()=>{scrollToDiv(hr);}}
      >
      
        Home
      </span>
      <span
        style={{
          cursor: "pointer",
          border: window.innerWidth < 600 ? "solid 1px white" : "none",
          padding: window.innerWidth < 600 ? "6px" : "none",
          borderRadius: window.innerWidth < 600 ? "8px" : "none",
        }}
        className="headerbtn"
        onClick={()=>{scrollToDiv(sr);}}
      >
        Skills
      </span>
      <span
        style={{
          cursor: "pointer",
          border: window.innerWidth < 600 ? "solid 1px white" : "none",
          padding: window.innerWidth < 600 ? "6px" : "none",
          borderRadius: window.innerWidth < 600 ? "8px" : "none",
        }}
        className="headerbtn"
        onClick={()=>{scrollToDiv(pr);}}
      >
        Projects
      </span>
      <span
        style={{
          cursor: "pointer",
          border: window.innerWidth < 600 ? "solid 1px white" : "none",
          padding: window.innerWidth < 600 ? "6px" : "none",
          borderRadius: window.innerWidth < 600 ? "8px" : "none",
        }}
        className="headerbtn"
        onClick={()=>{scrollToDiv(er);}}
      >
        Experience
      </span>
      <div
        style={{
          alignItems: "center",
          color: "white",
          display: "flex",
          backgroundColor: "transparent",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <BsLinkedin
          size={30}
          className="iicon"
          onClick={() => {
            open("https://www.linkedin.com/in/yassine-jellouli-8241b2299/");
          }}
        />
        <FaGithubSquare
          size={35}
          className="iicon"
          onClick={() => {
            open("https://github.com/jellouliyassine");
          }}
        />
        <ImMail
          size={32}
          className="iicon"
          onClick={() => {
            openGmail();
          }}
        />
      </div>
      
    </div>
    </div>
  );
}
export default Header2;
