import React, { useState, useEffect } from 'react';
import './App.css';

import AppRoutes from './helpers/AppRoutes';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // You can adjust the delay as needed
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: 'center',
          fontSize: '18px',
          marginTop: '60%',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        Loading... because good things take time (and a bit of code)
        <br /> ruko jara sabr karo🤌🏻
      </div>
    );
  }

  return (
    <>
   
      <AppRoutes />
     

    </>
  );
}

export default App;
