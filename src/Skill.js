import React from "react";
import "./newcss.css";
import bc from "./o6i.gif";
import { motion } from "framer-motion";
import { TbBackground } from "react-icons/tb";
function Skill({ name,logo: Logo ,color}) {
  let s=window.innerWidth<600?30:40;
  return (
<motion.div 
            initial={{ scale: 0 }}              // Start small
            whileInView={{ scale: 1 }}           // Grow to normal when in view
            transition={{ duration: 0.5 }}       // Smooth animation
            viewport={{ once: false, amount: 0.5 }}  // Animate on scroll, when 50% visible
 >
      <div className="skill" >

      <Logo size={s} className="logo" color={color} style={{border:"none"}} />

<span style={{fontSize:"1rem",fontWeight:"600",marginTop:"5px"}}>{name}</span>
      </div>
</motion.div>
  );
}
export default Skill;
