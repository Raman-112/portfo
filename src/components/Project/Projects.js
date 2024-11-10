import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tempestas from "../../Assets/Projects/tempestas.png";

import  intel from "../../Assets/Projects/intel.png";
import gg from "../../Assets/Projects/gg.png";
import task from "../../Assets/Projects/task.png";

function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tempestas}
                isBlog={false}
                title="Tempestas"
                description="Tempestas is a comprehensive weather monitoring system that provides real-time weather data and forecasts for any city worldwide. Users can view current conditions, a 7-day forecast, and hourly weather updates, all displayed in a visually engaging and easy-to-navigate interface. Key highlights include temperature, humidity, wind speed, and sunrise/sunset times, with options to toggle between Celsius and Fahrenheit. Ideal for daily planning and tracking weather trends, Tempestas ensures users stay informed about weather conditions anytime, anywhere."
                ghLink="https://github.com/Raman-0123/Tempestas"
                demoLink="https://raman-0123.github.io/Tempestas/"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gg}
                isBlog={false}
                title="Google Gravity"
                description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                ghLink="https://github.com/Raman-112/gravity_google"
                demoLink="https://raman-112.github.io/gravity_google/"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={task}
                isBlog={false}
                title="Task Manager"
                description="Infinity Task Manager is a simple yet effective web application designed to help users manage their tasks with ease. This application provides a clean and intuitive interface for users to log in or sign up and manage their task lists in an organized way. The login page includes a predefined admin account (Username: admin, Password: admin123) for demonstration purposes, allowing users to quickly test the app's functionality."
                ghLink="https://github.com/Raman-112/task_manager"
                demoLink="https://raman-112.github.io/task_manager/"              
              />
            </Col>
  
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={intel}
                isBlog={false}
                title="IntelliSpeed"
                description="IntelliSpeed is a sophisticated vehicle speed monitoring system that leverages computer vision and artificial intelligence to estimate and track vehicle speeds. This project utilizes advanced object detection models, specifically YOLOv8 (You Only Look Once version 8), for precise and real-time tracking of vehicles. IntelliSpeed is designed to capture and analyze video feeds to measure the speed of each vehicle, identify potential speeding violations, and store this data for easy access by authorities."
                ghLink="https://github.com/Raman-0123/IntelliSpeed"
                demoLink="https://raman-0123.github.io/IntelliSpeed/"
              />
            </Col>
  
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Projects;