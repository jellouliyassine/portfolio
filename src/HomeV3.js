import React from "react";
import prf from "./prf.png"
function HomeV3() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        padding:"80px",
        alignItems:"center",
        
      }}
    >
      <div>
            <div
              className="gradient-textv2"
              style={{
                display: "flex",
maxWidth:"70%",
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
                maxWidth:"70%",
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
            <span className="morebt">Read more</span>
          </div>
          <div style={{display:"flex",justifyContent:"center","alignItems":"center",borderLeft:"4px solid white",padding:"100px"}}>
           <img src={prf} width={"300px"} height={"300px"}/> 
          </div>
    </div>
  );
}
export default HomeV3;
