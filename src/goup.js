import React,{useRef} from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./newcss.css"
function Up({hr}){
    const size = window.innerWidth > 600 ? 50 : 20;

    const scrollToDiv = (reef) => {
        if (reef.current) {
          reef.current.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
<div
        style={{

          textAlign: "center",
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          zIndex: "4",
          padding: "8px",
        }}
      >
        <div
          className="backup"
          
        >
          <div
            onClick={() => {
              scrollToDiv(hr);
            }}
            style={{
              cursor: "pointer",
              width: "fit-content",
              padding: "5px",
              borderRadius: "8px",
              backgroundColor: "rgb(26, 25, 25)",
            }}
          >
            <FaArrowAltCircleUp
              size={size}
              className="logo"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

    );
}
export default Up;