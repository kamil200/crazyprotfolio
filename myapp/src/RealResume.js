import React from 'react'
import img from "./gif/b.gif"
import Pdf from "./resume/kamil-patel-resume (3).pdf"
function RealResume() {
  return (
    <>
    <div style={{ textAlign: "center" }}>
        <img src={img} alt="Your GIF"
        style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      
      <div  style={{
    position: "fixed",
    bottom: "5%", // Adjust distance from the bottom
    right: "5%", // Adjust distance from the right
    maxWidth: "100%", // Adjust the maximum width
   
  }}>
       
       <h1> hehe sorry, this is the REAL {" "}
             <a href={Pdf} target="_blank" rel="noopener noreferrer">
                       resume</a>
              
        </h1>
        <a href="https://www.youtube.com/watch?v=zL19uMsnpSU" target="_blank" rel="noopener noreferrer">
           and Subscribe to my YouTube Channel
        </a>
      </div>
    </>
  )
}

export default RealResume