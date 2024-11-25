import React from "react";
import "./newcss.css";
import bc from "./o6i.gif";
import { TbBackground } from "react-icons/tb";
function Card({ name,logo: Logo ,description}) {
  return (
    <div className="backcard">
      <div className="card">

<Logo size={100} className="logo" />

<span style={{fontSize:"1.4rem",fontWeight:"600",marginTop:"20px"}}>{name}</span>
<span style={{fontSize:"1rem",width:"100%",marginTop:"20px",padding:"4px","text-align": "justify","overflow-wrap": "break-word","line-height": "1.5" }}>{description}</span>
      </div>
    </div>
  );
}
export default Card;
