import logo from "./me.jpg";
import cool from "./cool.png";
import "./App.css";

function Miniexperience({content, title, img}) {
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
          // Example width, adjust as needed
        }}
      >
      
      </div>
      <div>
        <ul style={{ margin: "20px", color: "#c1c0c0" }}>
        {content.map((c, index) => (
  <li key={index}>
    <b >{c.year} :</b> 
    {c.evnt === "Place Abdelaziz Ben Idriss, Meknes" ? (
      <a href="https://maps.app.goo.gl/hjw38qLKX7SpGBTu8" target="_blank" rel="noopener noreferrer">{c.evnt}</a>
    ) : (      
       c.evnt === "Bâtiment B9, Rabat 11100" ? (
        <a href="https://maps.app.goo.gl/k3tCDAbM6Aeb1fko9" target="_blank" rel="noopener noreferrer">{c.evnt}</a>
      ) : (      
        c.evnt
      )
   
   
   )}
  </li>
))}

         
        </ul>
      </div>
    </div>
  );
}

export default Miniexperience;
