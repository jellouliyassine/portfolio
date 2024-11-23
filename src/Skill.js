import React from "react";
import "./newcss.css";
import bc from "./o6i.gif";
import { TbBackground } from "react-icons/tb";
function Skill({ name,logo: Logo ,color}) {
  let s=window.innerWidth<600?30:40;
  return (
<div >
      <div className="skill" >

      <Logo size={s} className="logo" color={color} style={{border:"none"}} />

<span style={{fontSize:"1rem",fontWeight:"600",marginTop:"5px"}}>{name}</span>
      </div>
</div>
  );
}
export default Skill;
