import React, { useRef } from "react";
import Header2 from "./Header2";
import HomeV3 from "./HomeV3";
import Up from "./goup";
import Skills2 from "./Skills2";
import Projects2 from "./Projects2";
import Experience2 from "./Experience2";

function Everything() {
  const HomeRef = useRef(null);
  const SkillRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectsRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures full height
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <Header2
          hr={HomeRef}
          sr={SkillRef}
          er={ExperienceRef}
          pr={ProjectsRef}
        />
      </div>

      {/* Spacer to avoid content overlap */}
      <div style={{ marginTop: "10px" }}></div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div ref={HomeRef}>
          <HomeV3 />
        </div>
        <div ref={SkillRef}>
          <Skills2 />
        </div>
        <div ref={ExperienceRef}>
          <Experience2 />
        </div>
        <div ref={ProjectsRef}>
          <Projects2 />
        </div>
      <div style={{height:"100px"}}>

      </div>
      </div>
      

    
      {window.innerWidth<600&&(<div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 10,
           // Optional: Styling for better visibility

        }}
      >
        <Up hr={HomeRef} />
      </div>)
      }
    </div>
  );
}

export default Everything;
