import React, { useState, useEffect } from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Connect from './page/Connect';
import Work from './page/Work';
import Construction from "./components/Construction";
import Footer from "./components/Footer"
import AGif from "./components/AGif";
import RealResume from "./components/RealResume";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Snapchat from "./components/Snapchat";
import Resume from "./page/Resume";
import Navbar from "./components/Navbar"


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // You can adjust the delay as needed
  }, []);

  if (isLoading) {
    return <div style={{textAlign:"center",
                        fontSize:"18px",
                        marginTop:"60%",
                        marginLeft:"10%",
                        marginRight:"10%"}}>Loading... because good things take time (and a bit of code)<br/> ruko jara sabr karo🤌🏻</div>;
  }

  return (
    <><Navbar />
      <Routes>
        <Route path="/" element={<Construction />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/AGif" element={<AGif />} />
        <Route path="/Rresume" element={<RealResume />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/insta" element={<Instagram />} />
        <Route path="/snapchat" element={<Snapchat />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
