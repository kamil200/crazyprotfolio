import React, { useState } from 'react';
import img from '../gif/b.gif';
import Pdf from '../resume/kamil-patel-resume (3).pdf';

function RealResume() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        background:"black" // Make sure the container takes up full viewport height

      }}
    >
      <div style={{ textAlign: 'center', display: isLoading ? 'block' : 'none' }}>
      bro use good speed net.... load ho raha
      </div>
      <img
        src={img}
        alt="Your GIF"
        style={{
          display: isLoading ? 'none' : 'block',
          maxWidth: '100%',
          height: 'auto',
        }}
        onLoad={handleImageLoad}
      />
      {!isLoading && (
        <div style={{ position: 'fixed', bottom: '5%', right: '5%', maxWidth: '100%',
        color:"white" }}>
          <h1>
            hehe sorry, 👉🏻{' '}
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </h1>
        
        </div>
      )}
    </div>
  );
}

export default RealResume;
