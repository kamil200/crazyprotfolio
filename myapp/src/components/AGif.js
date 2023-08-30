import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../gif/a.gif";

function AGif() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background:"black" // Make sure the container takes up full viewport height
    }}>
      <div style={{ textAlign: "center" }}>
        <img
          src={img}
          alt="Your GIF"
          style={{
            display: isLoading ? "none" : "block",
            maxWidth: "100%",
            height: "auto"
          }}
          onLoad={handleImageLoad}
        />
      </div>
      {isLoading ? (
        <div style={{ textAlign: "center" }}>  bro use good speed net.... load ho raha</div>
    
      ) : (
        <h1 style={{ textAlign: "center",
                      margin:"10vh"     
                      }}>
          <Link to="/Rresume">
            <span>🤫➡️</span>
          </Link>
        </h1>
      )}
    </div>
  );
}

export default AGif;
