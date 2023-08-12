import "./App.css";
import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Connect from './page/Connect';
import Work from './page/Work';

import Resume from "./Resume";


import Gif from "./components/Gif";

function App() {
  return (
    <>
     
    
    
      <Routes>
        <Route path="/" element={<Gif />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/connect" element={<Connect />} />
       <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
