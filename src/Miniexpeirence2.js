import React from "react";

function Miniexperience2({ year1,year2, title, localisation, description }) {
  const isMobile = window.innerWidth < 600;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        "box-sizing": "border-box",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
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
          padding:window.innerWidth>600?"10px":"7px",
          paddingBottom: "0px",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            boxSizing: "border-box",
            width:window.innerWidth>600?"15px":"10px",
            height:window.innerWidth>600?"15px":"10px",
            borderRadius: "100%",
            border: "white solid 5px",

            backgroundColor: "#8400c0",
            color: "#ffffff",
          }}
        >
        </span>

        <span
          style={{
            boxSizing: "border-box",
            height: "100%",
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            color: "#ffffff",
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
        <span style={{ fontSize: isMobile ? "1.3rem" : "1.6rem" }}>{title} </span>
        <span style={{fontSize: isMobile ? "1rem" : "1.2rem" ,padding:"2px",backgroundColor:"#484848",borderRadius:"4px"}}>{year1} to {year2}</span>
        <span style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          {localisation}
        </span>
        <span style={{ fontSize: isMobile ? "1rem" : "1.2rem","text-align": "justify" }}>
          {description}
        </span>
      </div>
    </div>
  );
}

export default Miniexperience2;
