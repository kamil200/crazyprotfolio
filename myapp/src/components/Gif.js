import React from "react";
import { Link, Route } from "react-router-dom";
import img from "../gif/a.gif";


function Gif() {

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src={img} alt="Your GIF"
        style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <h1>
        <Link to="/resume">hehe, chalo yaha aa hi gye ho to  </Link>
      </h1>
      
    </>
  );
}

export default Gif;