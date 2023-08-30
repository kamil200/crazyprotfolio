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


function App() {
  return (
    <>
     
    
    
      <Routes>
        <Route path="/" element={<Construction />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/connect" element={<Connect />} />
       <Route path="/AGif" element={<AGif />} />
       <Route path="/resume" element={<RealResume />} />
       <Route path="/footer" elemnt={<Footer />}/>
       <Route path="/facebook" element ={<Facebook />} />
       <Route path="/insta" element ={<Instagram/>} />
       <Route path="/snapchat" element={<Snapchat />} />
      </Routes>
    </>
  );
}

export default App;
