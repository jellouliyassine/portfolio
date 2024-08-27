import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import Miniexperience from "./Miniexperience";
import mks from "./meknes.jpg";
import ensa from "./ensa.jpg"
import vamos from "./vamos.jpg"
import pref from "./pref.jpg"
import dxc from "./dxc.jpg"
import wer from "./wer.png"
import qube from "./qube.jpg"
import ddxc from "./ddxc.png"
import msp from "./msp.png"
import traitement from "./traitement.png"
import cisco from "./cisco.jpg"
import tictac from "./tictac.png"
import { BsArrowReturnRight } from "react-icons/bs";
import Project from "./Project";

function Projects() {

  return (
    <div className="experience">

<h1 className="glowing-text-experience" >Projects</h1>
<h3 className="glowing-text-experience" style={{marginTop:"-8px"}} >From 2021 To 2024</h3>

<div className="school" style={{border:"none"}}>
<div id="p1">  
<Project content={["Talend","Java","HTML","CSS","PL/SQL","SQL","JavaScript","Scrum"]}
txt="Developed a project idea for a company dedicated to creating data warehouses"
      title="WearHouser"
      img={wer} />

</div>

<div id="p2">         
<Project content={["Java","Problem Solving","Graph theory"]}
txt="Implementing a solution for the Tables-Infinite-Qube  puzzle using Java and graph theory "
      title="tables-infinite-qube-problem-solving"
      img={qube} />
</div>
<div id="p3">          
<Project content={["Spring Boot","Spring Security","Spring","React JS","Junit","java","JavaScript","MySQL","Jenkins","Scrum"]}
txt=" Designed and developed a project management application based on the Scrum
framework, supporting projects throughout the value creation process, with analytical
views to facilitate analysis and report generation for project managers at DXC
Technology Morocco"
      title="Scrum Project Planing"
      img={ddxc} />
</div>

<div id="p4">         
<Project content={["Java","MSP"]}
txt="Using the Statistical Process Control (SPC) method to create a console program that automatically retrieves the optimal coordinates of a given function that describes a process, for minimizing or maximizing the function value."
      title="MSP_Planification_Optimum"
      img={msp} />
</div>

<div id="p5">         
<Project content={["Java","MySQL","XML","Swing","OpenCV"]}
txt="Retrieve satellite images with a specified scale, apply filters, extract elements, and then map optimal routes and
paths"
      title="Roadmap-Segmentation-and-Extraction-from-Satellite-Images"
      img={traitement} />
</div>

<div id="p6">               
<Project content={[".Net","C#","Network protocols"]}
txt=" Developed a desktop application using C# and the .NET framework for configuring
Cisco switches used by the prefecture."
      title="switch_cnfig"
      img={cisco} />
</div>

    <div id="p7">    
<Project  content={["Java","Problem Solving","Graph theory"]}
txt="Implementing a solution for the TIC_TAC_TOE puzzle using Java and graph theory"
      title="TIC_TAC_TOE"
      img={tictac} />
</div>
</div>






    </div>
  );
}

export default Projects;
