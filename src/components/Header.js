import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaGithub, FaFileAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import logo from '../Assets/logo.png';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle navbar expansion
  const toggleNavbar = () => {
    setExpanded(expanded ? false : "expanded");
  };

  // Handle scroll to add background color
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-header ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
    >
      <Navbar.Brand as={NavLink} to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      
      {/* Toggler */}
      <div
        className={`navbar-toggler ${expanded ? "active" : ""}`}
        onClick={toggleNavbar}
      >
        <div className="navbar-toggler-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Collapsible Navbar */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
            <FaHome /> Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>
            <FaUser /> About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects" onClick={() => setExpanded(false)}>
            <FaLaptopCode /> Projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/resume" onClick={() => setExpanded(false)}>
            <FaFileAlt /> Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
            <FaEnvelope /> Contact
          </Nav.Link>
          {/* External GitHub link */}
          <Nav.Link href="https://github.com/Raman-0123" target="_blank" className="github-icon">
            <FaGithub />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
