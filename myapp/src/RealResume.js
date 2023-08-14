import React, { useState } from 'react';
import img from './gif/b.gif';
import Pdf from './resume/kamil-patel-resume (3).pdf';

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
        height: '100vh', // Make sure the container takes up full viewport height
      }}
    >
      <div style={{ textAlign: 'center', display: isLoading ? 'block' : 'none' }}>
        Loading...
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
        <div style={{ position: 'fixed', bottom: '5%', right: '5%', maxWidth: '100%' }}>
          <h1>
            hehe sorry, this is the REAL{' '}
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </h1>
          <a
            href="https://www.youtube.com/watch?v=zL19uMsnpSU"
            target="_blank"
            rel="noopener noreferrer"
          >
            and Subscribe to my YouTube Channel
          </a>
        </div>
      )}
    </div>
  );
}

export default RealResume;
