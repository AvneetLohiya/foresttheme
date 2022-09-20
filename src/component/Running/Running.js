import React from "react";
import "./Running.css";

const Running = (props) => {
  return (
    <>
    
      <div className="div-for-the-image-in-background">
        <img
          className="div-of-img-men-running"
          src={props.onlineproduct.url } alt=""
        />
        <div class="top-right"><h2>{props.onlineproduct.heading}</h2></div>
        <div class="top-right-running"><h2>{props.onlineproduct.para}</h2></div>
       

      </div>
      
    </>
  );
};

export default Running;


 
