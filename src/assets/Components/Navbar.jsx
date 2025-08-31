import React, { useState, useEffect } from "react";
import "./Navbar.css";
import HeroSection from "./HeroSection";


  


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    
    
    <nav className="navbar">
      <div className="logo">
          <img src="./public/images/gymlogo.jpg" alt="Gym Logo" />
        
         <div className="animate__animated animate__flip">
           Shayan Fitness Club</div>
      
      </div>

      {/* ✅ Only ONE right-group for both links + button */}
      <div className="right-group">
        
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Blogs</a></li>
          <li><a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a></li>
          <li><a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <button className="join-btn">Join now</button>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
