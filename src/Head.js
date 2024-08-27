import "./App.css";
import React from "react";
import { Link } from "react-router-dom"; 
function Header() {
 
  return (
   
      <div className="headerr" style={{ padding: "10px" }}>
        <Link to="/" style={{ textDecoration: 'none'}}><span className="glowing-text" >HOME</span></Link>
        <Link to="/Experience" style={{ textDecoration: 'none'}}><span className="glowing-text">EXPERIENCE</span></Link>
        <Link to="/Project" style={{ textDecoration: 'none'}}> <span className="glowing-text" style={{ "margin-right": "20px" }}>
          PROJECTS
        </span></Link>
       
      </div>

   
    
  );
}

export default Header;
