import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../resume/kamil-patel-resume (3).pdf";
import "../navbar.css"; // Import your custom CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/connect" className="nav-link">
              Connect
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <a href={Pdf} className="nav-link" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
