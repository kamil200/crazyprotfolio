import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./page/About";
import Resume from "./page/Resume";
import Connect from "./page/Connect";
import Work from "./page/Work";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/work" element={<Work />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
