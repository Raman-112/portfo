import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiBootstrap,
  DiPython,
  DiGit,
  DiCss3  ,
  DiHtml5,
  DiOpensource,
} from "react-icons/di";
import {
  SiAmazonwebservices,
  SiFirebase,
  SiNpm,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiScikitlearn,
  SiJson,
  SiCanva,
  SiAdobe,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOpensource />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonwebservices />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJson />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>



      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      

 

    </Row>
  );
}

export default Techstack;
