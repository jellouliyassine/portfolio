import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import "./newcss.css";
import clickme from "./clickme.gif";
import { useState } from "react";
import { motion } from "framer-motion";
function Project2({ content, title, img, thecnologie, type }) {
  const [click,setclick]= useState(false);
  return (
    <motion.div 
    initial={{ scale: 0 }}              // Start small
    whileInView={{ scale: 1 }}           // Grow to normal when in view
    transition={{ duration: 0.5 }}       // Smooth animation
    viewport={{ once: false, amount: 0.5 }}  // Animate on scroll, when 50% visible

      className="Miniexperiencev2"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", // Adjusts the background image to cover the entire div
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "350px",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer"
      }}
      onClick={()=>{setclick(!click)}}
    >
      {click ? (
        <div
          style={{
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "rgba(39, 39, 39,0.8)",
            padding: "8px",
 
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <ul
            style={{
              padding: 0,
              margin: 0,
              height: "fit-content",
              listStylePosition: "inside",
              justifyContent: "left",
              fontSize: window.innerWidth < 600 ? "100px" : "14px",
              "line-height": window.innerWidth < 600 ? "2" : "2",
            }}
          >
            <li>
              <b>Type</b> : {type}
            </li>
            <li>
              <b>Technologies</b> : {thecnologie}
            </li>
            {content.map((c, index) => (
              <li>{c}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div
        
        style={{ backgroundImage: `url(${clickme})`,
        backgroundSize: "cover", // Adjusts the background image to cover the entire div
        backgroundPosition: "center",
        opacity: 0.8,filter: "invert(100%)",
        backgroundRepeat: "no-repeat",

      width:"20%",height:"20%"}}
        >

        </div>
      )}
    </motion.div>
  );
}

export default Project2;
