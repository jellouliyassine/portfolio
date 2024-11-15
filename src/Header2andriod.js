import React from "react";
import { BsBorderTop, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import "./newcss.css"
function Header2andriod(){
    return(<div style={{ marginBottom:"5px",alignItems:"center",fontSize:"1.3rem",padding:"10px",color:"white",display:"flex",backgroundColor:"transparent",justifyContent:"flex-end",gap:"30px"}}>
<span style={{cursor:"pointer"}} className="headerbtn">Home</span>
<span style={{cursor:"pointer"}} className="headerbtn">Skills</span>
<span style={{cursor:"pointer"}} className="headerbtn">Projects</span>
<div  style={{alignItems:"center",color:"white",display:"flex",backgroundColor:"transparent",justifyContent:"center",gap:"5px"}}>
<BsLinkedin size={30} className="iicon" />
<FaGithubSquare size={35} className="iicon"/>
<ImMail  size={32} className="iicon"/>
</div>
<span className="chitchat" >ChitChat</span>
    </div>);
}
export  default Header2andriod;