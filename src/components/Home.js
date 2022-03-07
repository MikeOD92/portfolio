import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import About from "./About";

export default function Home() {
  const [show, setShow] = useState(true);

  const animate = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 50 },
  });

  const controlSplash = () => {
    if (window.scrollY > window.visualViewport.height - 100) {
      setShow(false);
    } else setShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlSplash);
    return () => {
      window.removeEventListener("scroll", controlSplash);
    };
  }, []);

  return (
    <Container fluid style={{ paddingLeft: "0", paddingRight: "0" }}>
      <animated.div
        fluid
        className={`splash ${show && "splash__visable"}`}
        style={animate}
      >
        {" "}
        <Row>
          <Col>
            <h1 className="splashTitle">
              {" "}
              _Michael_ T_ <br />
              _O'Dell{" "}
            </h1>
          </Col>
          <Col>
            <h2 className="splashSubTitle">
              {" "}
              Software Engineer~ <br />
              Web Developer~ <br /> Artist~
            </h2>
          </Col>
        </Row>
      </animated.div>

      <Container fluid>
        <Row id="about">
          <About />
        </Row>
        <Row>
          <Skills />
        </Row>
        <Row>
          <Portfolio />
        </Row>
      </Container>
    </Container>
  );
}
