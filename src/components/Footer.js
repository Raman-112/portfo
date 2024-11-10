import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ramanjot Singh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RJS</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Roll No.- 2310992347</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
