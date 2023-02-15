import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { RiArrowGoForwardFill } from "react-icons/ri";

export default function About() {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col xs={6} sm={4} md={3} lg={3} xl={2}>
          <h2> About </h2>
          <Image
            className="profPic"
            fluid
            roundedCircle
            src="https://i.imgur.com/lGDDgKK.jpg"
          />
        </Col>
        <Col className="aboutLine">
          <p>
            {" "}
            My name is Michael, I'm a software engineer, thru-hiker and artist
            who uses Javascript and Python to build websites and applications.{" "}
          </p>
          <Row className="mt-5">
            <Col md={6} lg={9}></Col>
            <Col md={6} lg={3}>
              <a
                className="navLink resumeLink"
                target="_blank"
                href="https://docs.google.com/document/d/1FjxY7Q63uHAY_-X2ZyAQuV_YcuQO51HO_vqVTS5NW80/edit?usp=sharing"
                rel="noreferrer"
              >
                <RiArrowGoForwardFill /> Resume{" "}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
