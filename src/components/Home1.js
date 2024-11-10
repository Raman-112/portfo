import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../Assets/Avatar.png';
import codingIllustration from '../Assets/home-main.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './Home1.css';

const titles = [
  "Open Source Contributor",
  "Freelancer",
  "AI/ML Enthusiast",
  "Frontend Developer",
  "DevOps Engineer",
  "Competitive Programmer",
  "Tech Blogger",
];

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitle];
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before backspacing
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const interval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section id="home" className="home-section">
      <div className="intro-text">
        <h1>Hi Everyone !! <span role="img" class="wave">👋🏼</span></h1>
        <h2>I'm <span className="name-highlight">Ramanjot Singh</span></h2>
        <h3 className="typewriter">{displayText}</h3>
      </div>
      <div className="image-container">
        <img src={codingIllustration} alt="Coding Illustration" />
      </div>
    </section>
  );
};

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              HERE'S A <span className="purple"> GLIMPSE </span> OF MY JOURNEY
            </h1>
            <p className="home-about-body">
            My exploration of programming has been truly engaging, and I’ve gained a solid foundation along the way... 🌱
              <br />
              <br />I'm proficient in languages like
              <i>
                <b className="purple">Object-Oriented Programming, C, C++, Html, CSS, JavaScript, Python.</b>
              </i>
              <br />
              <br />
              My areas of interest include developing innovative &nbsp;
              <i>
                <b className="purple">Digital solutions and platforms </b>  with a strong focus on the{" "}
                </i>
                <i><b className="purple">Internet of Things (IoT)  </b></i>
                <i>
                <b>&{" "}
                <b className="purple"> AI/ML</b>
                </b>
              </i>

              <br />
              <br />
              I make the most of every opportunity to build products using <b className="purple">Node.js</b>  along with the
              <i>
                <b className="purple"> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js 🚀</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>WHERE TO FIND ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Raman-0123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ramanjot-singh-65a512274/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const CombinedHome = () => {
  return (
    <>
      <Home />
      <Home2 />
    </>
  );
};

export default CombinedHome;
