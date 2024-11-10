import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import resumeImage from "../../Assets/Projects/ri.png";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row className="resume" style={{ justifyContent: "center" }}>
          <img 
            src={resumeImage} 
            alt="Resume" 
            className="img-fluid"
            style={{
              width: width > 786 ? "60%" : "90%", // Adjust size for responsiveness
              margin: "20px auto",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
