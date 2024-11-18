import React from "react";
import "./newcss.css";
import bc from "./o6i.gif";
import { TbBackground } from "react-icons/tb";
function Skill({ name,Description}) {
  return (
<div className="backSkills">
      <div className="skill" >

<span  style={{color:"#71d9f8",fontSize:"1.3rem",textAlign:"center"}}>{name}</span>
<span style={{fontSize:"1.1rem",textAlign:"center"}}>{Description}</span>
      </div>
</div>
  );
}
export default Skill;
