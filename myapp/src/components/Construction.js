import React from 'react';
import '../resume.css'; // Import your custom CSS file for styling
import Footer from "./Footer"
import img from "../gif/kamil.gif"
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
function Construction() {
  return (
    <div>
      <Navbar />
    <div className="resume-container"
    style={{ hight:'100vh',}}>
      
      <div className="under-construction">
        <div style={{ position: 'relative' }}>
          <img src={img} style={{ maxWidth: "100%", height: "auto" }} alt="Under Construction" />
          <h1 style={{
            position: 'absolute',
            top: '75%', // Adjust this value to position the heading vertically
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the heading horizontally and vertically
            textAlign: 'center',
            color: 'white', // Change the color to your preference
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
            
            fontSize:'16px'
          }}>
            this page is under construction 
            <br/>tab tak, take a look at my 👉🏻 
            
            <Link to="/AGif">
              <span>Resume</span>
            </Link>
          </h1>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default Construction;
