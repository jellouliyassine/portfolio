import React, { useRef } from "react";
import Header2 from "./Header2";
import HomeV3 from "./HomeV3";
import Skills2 from "./Skills2";
import Projects2 from "./Projects2";
import Experience2 from "./Experience2";
function Everything() {
  const HomeRef = useRef(null);
  const SkillRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectsRef = useRef(null);

  return (
    <div style={{ height: "100%" }}>
      <div style={{ position: "fixed", width: "100%", height: "100%" }}>
        <Header2
          hr={HomeRef}
          sr={SkillRef}
          er={ExperienceRef}
          pr={ProjectsRef}
        />
      </div>
      <div ref={HomeRef}>
        <HomeV3  />
      </div>
      <div  ref={SkillRef}>
        <Skills2 />
      </div>
      <div ref={ExperienceRef}>
        <Experience2  />
      </div>
      <div ref={ProjectsRef} >
        <Projects2 />
      </div>
    </div>
  );
}
export default Everything;
