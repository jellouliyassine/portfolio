import React from "react";

function Miniexperience2({ year, title, localisation, description }) {
  const isMobile = window.innerWidth < 600;

  return (
    <div
      style={{
        gap: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft:isMobile?"10px":"100px",
        paddingRight:isMobile?"10px":"100px",
        maxWidth:"1000px"
    
      }}
    >
      <div
        style={{
          fontSize: isMobile ? "1.2rem" : "2rem",
          marginTop: isMobile ? "-5px" : "-11px",
          width: "100%",

          maxWidth: "fit-content",
        
        }}
      >
        {year}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
          minHeight: "100%",
            boxSizing: "border-box",
        }}
      >
        <span
          style={{
            width: "0.5rem",
            height: "0.5rem",
            borderRadius: "100%",
            border: "white solid 5px",
            boxShadow: "white 0px 1px 5px 4px",
            backgroundColor: "#8400c0",
            color: "#ffffff",
          }}
        />
        <span
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"flex-end",
            minHeight: "200px",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#ffffff",
            width: "4px",
          }}
        >
          .
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "4px",
          marginTop: "-11px",
          
        }}
      >
        <span style={{ fontSize: isMobile ? "1.6rem" : "2rem" }}>{title}</span>
        <span style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>{localisation}</span>
        <span style={{ fontSize: isMobile ? "1rem" : "1.2rem" }}>{description}</span>
      </div>
    </div>
  );
}

export default Miniexperience2;
