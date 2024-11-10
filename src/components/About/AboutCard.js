import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hii Everyone, I am <span className="purple">Ramanjot Singh </span>
            from <span className="purple"> Patiala, Punjab, India.</span>
            <br />
            I'm currently a 2nd-year Computer Science Engineering student at <span className="purple">Chitkara University, Punjab</span>.
            <br />
            I have a passion for coding and I love to learn new technologies. I'm a quick learner and I'm always ready to learn new things.
            <br />
            <br />
            I am currently having <b><span className="purple"> 9.05 CGPA</span> </b> in my 2nd year. I am a Web Developer and I have worked on various projects. I have a good understanding of Data Structures and Algorithms.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Committed to developing innovations that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ramanjot Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;