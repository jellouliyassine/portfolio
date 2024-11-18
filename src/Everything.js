import React from "react";
import Header2 from "./Header2";
import HomeV3 from "./HomeV3";
import Skills2 from "./Skills2";
import Projects2 from "./Projects2";
import Experience2 from "./Experience2";
function Everything() {
  return (
    <div style={{ height: "100%"}} >
      <div style={{position:"fixed",width:"100%",height:"100%"}}>
        <Header2 />
      </div>
      
        <HomeV3 />

        <Skills2 />
        <Experience2 />
<Projects2/>



    </div>
  );
}
export default Everything;
