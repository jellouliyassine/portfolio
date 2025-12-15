import React from "react";
import { motion } from "framer-motion";

function Miniexperience2({ year1, year2, title, localisation, description }) {
  const isMobile = window.innerWidth < 600;

  return (
    <motion.div 
    initial={{ scale: 0 }}              // Start small
    whileInView={{ scale: 1 }}           // Grow to normal when in view
    transition={{ duration: 0.5 }}       // Smooth animation
    viewport={{ once: false, amount: 0.5 }}  // Animate on scroll, when 50% visible

      style={{
        width: "fit-content",
        height: "100%",
        "box-sizing": "border-box",
        display: "flex",
        justifyContent: "flex-start",
        padding: "10px",
maxWidth:"900px",
color:"rgba(255,255,255,0.8)"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "8px",
          padding: window.innerWidth > 600 ? "10px" : "7px",
          paddingBottom: "0px",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            boxSizing: "border-box",
            width: window.innerWidth > 600 ? "15px" : "10px",
            height: window.innerWidth > 600 ? "15px" : "10px",
            borderRadius: "100%",
            border: "#FF4D00 solid 5px",

            backgroundColor: "white",
            color: "#FF4D00",
          }}
        ></span>

        <span
          style={{
            boxSizing: "border-box",
            height: "100%",
            boxSizing: "border-box",
            backgroundColor: "#FF4D00",
            color: "#FF4D00",
            width: "4px",
          }}
        ></span>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <span style={{ fontSize: isMobile ? "1.3rem" : "1.6rem",backgroundColor:"#FF4D00",padding:"5px",boxSizing:"border-box",borderRadius:"5px" }}>
          {title}{" "}
        </span>
        <span
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            padding: "2px",
            backgroundColor: "#FF5938",
            borderRadius: "4px",
          }}
        >
          {year1} to {year2}
        </span>
        <span style={{ fontSize: isMobile ? "0.9rem" : "1.1rem",backgroundColor:"#FF755C",padding:"5px",boxSizing:"border-box",borderRadius:"5px" }}>
          {localisation}
        </span>
        <div
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            
          }}
        >
          <ul style={{ padding: 0, margin: 0, listStylePosition: "inside","line-height":window.innerWidth<600?"1.7":"1.5" }}>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Miniexperience2;
