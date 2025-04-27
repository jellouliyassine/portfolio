import React from "react";
import "./newcss.css";
import bc from "./o6i.gif";
import { TbBackground } from "react-icons/tb";
import { motion } from "framer-motion";

function Card({ name,logo: Logo ,description}) {
  return (
    <motion.div 
    initial={{ scale: 0 }}              // Start small
    whileInView={{ scale: 1 }}           // Grow to normal when in view
    transition={{ duration: 0.5 }}       // Smooth animation
    viewport={{ once: false, amount: 0.5 }}  // Animate on scroll, when 50% visible
className="backcard">
      <div className="card">

<Logo size={100} className="logo" />

<span style={{fontSize:"1.4rem",fontWeight:"600",marginTop:"20px"}}>{name}</span>
<span style={{fontSize:"1rem",width:"100%",marginTop:"20px",padding:"4px","text-align": "justify","overflow-wrap": "break-word","line-height": "1.5" }}>{description}</span>
      </div>
    </motion.div>
  );
}
export default Card;
