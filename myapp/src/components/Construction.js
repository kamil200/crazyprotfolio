import React from 'react';
import '../resume.css'; // Import your custom CSS file for styling
import Footer from "./Footer"
import img from "../gif/kamil.gif"
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
function Construction() {
  return (
    <div>
     
    <div className="resume-container"
    style={{
    flexDirection: 'column',
    justifyContent: 'space-between'}}>
      
      <div className="under-construction">
        <div >
          <img src={img} style={{ maxWidth: "100%",  margin:"-25%"}} alt="Under Construction" />
          <h1 style={{
            position: 'relative',
            top: '75%', // Adjust this value to position the heading vertically
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the heading horizontally and vertically
            textAlign: 'center',
            color: 'white', // Change the color to your preference
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
            fontSize:'18px'
          }}>
            this page is under construction 
            <br/>tab tak, take a look at my 👉🏻 
            
            <Link to="/AGif">
              <span>Resume</span>
            </Link>
          </h1>
        </div>
      </div>
 
      </div>
    </div>
  );
}

export default Construction;
