import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";
import "./newcss.css";

function Project2({content, title, img,txt}) {
  return (
    
    <div className="Miniexperiencev2">
        <span
   
          style={{
            color:"white",
            display: "flex",
            padding:"4px",
            width:"100%",
           justifyContent:"center",
           fontSize:"1.3rem"
          }}
        >
          {title}
        </span>
      <div
        style={{
          display: "flex",
          "align-items": "flex-start",
          justifyContent: "center",
          color: "#fff",
          "text-shadow": "0 0 2px #fff",

          border: "white solid 1px",

          backgroundImage: `url(${img})`,
          backgroundSize: "cover", // Adjusts the background image to cover the entire div
          backgroundPosition: "center", // Centers the background image
          height: "200px", // Example height, adjust as needed
           // Example width, adjust as needed
        }}
      >
      
      </div>
      <span
          style={{
        
            display: "flex",
            padding:"8px",
           justifyContent:"center",
           color:"#fff8fb ",
          }}
        >
          {txt}
        </span>
      <div>
        <br></br>
        <div style={{ color: " #d8d8d8",display: "flex",
            
           justifyContent:"flex-start",flexWrap:"wrap"}}>
        {content.map((c, index) => (

<span  style={{
             textAlign:"center",
             margin:"3px",
             padding:"6px",
              borderRadius: "10px",
              "background-color": "transparent",
              border: " #d8d8d8 solid 1px",
            }}>{c}</span>
    


))}

         
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Project2;
