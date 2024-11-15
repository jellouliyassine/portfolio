import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import Miniexperience from "./Miniexperience";
import mks from "./meknes.jpg";
import ensa from "./ensa.jpg"
import vamos from "./vamos.jpg"
import pref from "./pref.jpg"
import dxc from "./dxc.jpg"
import { BsArrowReturnRight } from "react-icons/bs";

function Experience() {

  return (
    <div className="experience">

<h1 className="glowing-text-experience" >Internship</h1>
<h3 className="glowing-text-experience" style={{marginTop:"-8px"}} >From 2021 To 2024</h3>

<div className="school">
  
<Miniexperience content={[{year:"Period ",evnt:"June 2021 To July 2021"},{year:"Topic",evnt:"Portfolio for the company"},{year:"Mode",evnt:"Full remote internship"},{year:"Organisation",evnt:"Vamos Digital"}]}
      title="Internship for learning basics"
      img={vamos} />


<Miniexperience content={[{year:"Period ",evnt:"July 2023 - August 2023"},{year:"Topic",evnt:"Desktop application for configuring Cisco switches used by the prefecture"},{year:"Mode",evnt:"On-site internship"},{year:"Organisation",evnt:"Meknes Prefecture"},{year:"Adresse",evnt:"Place Abdelaziz Ben Idriss, Meknes"}]}
      title="Internship for Practicing and Applying My Knowledge"
      img={pref} />

<Miniexperience content={[{year:"Period ",evnt:"February 2024 - August 2024"},{year:"Topic",evnt:"Project management application based on the Scrum framework"},{year:"Mode",evnt:"Hybrid internship"},{year:"Organisation",evnt:"DXC Technology"},{year:"Adresse",evnt:"Bâtiment B9, Rabat 11100"}]}
      title="Internship for My Final Year Project"
      img={dxc} />

</div>

<h1 className="glowing-text-experience" >Studies</h1>
<h3 className="glowing-text-experience" style={{marginTop:"-8px"}} >From 2018 To 2024</h3>

<div className="school">
  
<Miniexperience content={[{year:"2018 - 2019 ",evnt:"Second year of Mathematics and Science B."},{year:"2017 - 2018 ",evnt:"First year of Mathematics and Science"}]}
      title="Omar Ibn Khattab High School"
      img={mks} />


<Miniexperience content={[{year:"2024 ",evnt:"Software engineer degree"},{year:"2021 - 2024 ",evnt:"Software engineering student"},{year:"2019 - 2021 ",evnt:"classe préparatoire (the french system)"}]}
      title="Ensa tanger"
      img={ensa} />

</div>


    </div>
  );
}

export default Experience;
