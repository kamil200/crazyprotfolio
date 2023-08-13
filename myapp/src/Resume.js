import React from 'react';
import Navbar from './components/Navbar';
import './resume.css'; // Import your custom CSS file for styling
import Pdf from "./resume/kamil-patel-resume (3).pdf"
import img from "./gif/1.png"
function Resume() {
  return (

    
    <div className="resume-container">
      <div className="under-construction">
        <div>
          <img src={img}style={{ maxWidth: "100%", height: "auto" }} />
          <h1> GodTeir Portfolio In Construction</h1>
          <h1> tab tak  {" "}
               <a href={Pdf} target="_blank" rel="noopener noreferrer">
                       resume
               </a>{" "}
               dekh lo
             </h1>
          </div>
      </div>
    </div>
  );
}

export default Resume;
