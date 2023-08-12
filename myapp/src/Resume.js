import React from 'react';
import Navbar from './components/Navbar';
import './resume.css'; // Import your custom CSS file for styling
import Pdf from "./resume/kamil-patel-resume (3).pdf"
function Resume() {
  return (

    
    <div className="resume-container">
    

   
  
      <div className="under-construction">
      <div>
  <h1>
    COOL, MindBLOWING portfolio website is in the making.... till then{" "}
    <a href={Pdf} target="_blank" rel="noopener noreferrer">
      resume
    </a>{" "}
    se kaam chalalo
  </h1>
  </div>
</div>
    </div>
  );
}

export default Resume;
