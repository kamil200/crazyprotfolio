import React, { useState } from 'react';
import img from "../gif/snapchat.gif";

function Snapchat() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Make sure the image takes up the full viewport height
      overflow: 'hidden',
      background:"black" // Hide any overflowing content
    }}>
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
      {isLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>
      )}
    </div>
  );
}

export default Snapchat;
