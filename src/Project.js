import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";

function Project({content, title, img,txt}) {
  return (
    
    <div className="Miniexperience">
        <span
          style={{
            display: "flex",
            padding:"2px",
            width:"100%",
           justifyContent:"center",
           color:"#fff8fb ",
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
          width: "500px", // Example width, adjust as needed
        }}
      >
      
      </div>
      <span
          style={{
        
            display: "flex",
            padding:"2px",
           justifyContent:"center",
           color:"#fff8fb ",
          }}
        >
          {txt}
        </span>
      <div>
        <br></br>
        <div style={{ color: "#ec2471",display: "flex",
            
           justifyContent:"flex-start",flexWrap:"wrap"}}>
        {content.map((c, index) => (

<span  style={{
             textAlign:"center",
             margin:"3px",
             padding:"3px",
              borderRadius: "50px",
              "background-color": "#1c212b",
              border: "#ec2471 solid 2px",
            }}>{c}</span>
    


))}

         
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Project;
