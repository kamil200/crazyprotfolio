import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../resume/kamil-patel-resume (3).pdf";
function Navbar() {
  return (
    <nav>
      <ul id="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <a href={Pdf}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
