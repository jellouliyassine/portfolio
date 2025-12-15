import React, { useRef } from "react";

import "./newcss.css";

function Header2({ hr, sr, er, pr }) {
  const scrollToDiv = (reef) => {
    if (reef.current) {
      reef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{backgroundColor:"transparent",zIndex:"5000",marginTop:"10px",boxSizing:"border-box"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"}}>
      <div
        style={{
          // backgroundColor: "rgba(0,0,0,0.5)",
          color:"white",
          // "backdrop-filter": "blur(10px)",
          alignItems: "center",
          justifyContent:"center",
          padding: "5px",
          height: "30px",
          display: "flex",
          paddingLeft:"10px",
          paddingRight:"10px",
          borderRadius:"10px",
          
          
          gap: "5px",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            padding: window.innerWidth < 600 ? "6px" : "none",
            backgroundColor:"#FF2626"
          }}
          className="headerbtn"
          onClick={() => {
            scrollToDiv(hr);
          }}
        >
          Home
        </span>
        <span
          style={{
            cursor: "pointer",

            padding: window.innerWidth < 600 ? "6px" : "none",
            backgroundColor:"#FF4D00"

          }}
          className="headerbtn"
          onClick={() => {
            scrollToDiv(er);
          }}
        >
          Experience
        </span>

        <span
          style={{
            cursor: "pointer",
            padding: window.innerWidth < 600 ? "6px" : "none",
            backgroundColor:"#FFC226"

          }}
          className="headerbtn"
          onClick={() => {
            scrollToDiv(sr);
          }}
        >
          Skills
        </span>
        <span
          style={{
            cursor: "pointer",
            padding: window.innerWidth < 600 ? "6px" : "none",
            backgroundColor:"#FF9D26"

          }}
          className="headerbtn"
          onClick={() => {
            scrollToDiv(pr);
          }}
        >
          Projects
        </span>

      </div>
      </div>

    </div>
  );
}
export default Header2;
