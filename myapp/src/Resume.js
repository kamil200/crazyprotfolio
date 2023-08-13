import React from 'react';
import Navbar from './components/Navbar';
import './resume.css'; // Import your custom CSS file for styling

import img from "./gif/1.png"
import { Link } from 'react-router-dom';
function Resume() {
  return (

    
    <div className="resume-container">
      <div className="under-construction">
        <div>
          <img src={img}style={{ maxWidth: "100%", height: "auto" }} />
          <h1> GodTeir Portfolio In Construction</h1>
          <h1> tab tak  {" "}
            <Link to="/resume"> <span  >resume</span>  </Link>
               {" "}
               dekh lo
             </h1>
            
          </div>
      </div>
    </div>
  );
}

export default Resume;
