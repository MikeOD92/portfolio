import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
  SiPostman,
  SiRedux,
  SiRubyonrails,
  SiGit,
  SiBootstrap,
  SiGimp,
  SiTestinglibrary,
  SiJest,
} from "react-icons/si";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJqueryLogo,
  DiSass,
  DiReact,
  DiDatabase,
  DiGulp,
  DiNodejsSmall,
  DiRuby,
  DiPostgresql,
  DiMongodb,
  DiPython,
  DiDjango,
  DiDocker,
  DiHeroku,
} from "react-icons/di";

export default function Skills() {
  return (
    <Container className="py-3" id="skills">
      <IconContext.Provider value={{ className: "iconStyles" }}>
        <Row className="mt-4" style={{ textAlign: "center" }}>
          {" "}
          <h2> Skills</h2>
        </Row>
        <Row className="mt-5">
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <h3> Front End</h3>
            <DiHtml5 />
            <DiCss3 />
            <DiJsBadge />
            <DiReact />
            <SiRedux />
            <DiJqueryLogo />
            <SiBootstrap />
            <DiSass />
            <DiGulp />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <h3> Back End </h3>
            <DiPython />
            <DiRuby />
            <DiNodejsSmall />
            <DiDjango />
            <SiRubyonrails />
            <DiDocker />
            <DiDatabase />
            <DiPostgresql />
            <DiMongodb />
            <SiPostman />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <h3> Other </h3>
            <SiGit />
            <DiHeroku />
            <SiTestinglibrary />
            <SiJest />
            <SiAdobeillustrator />
            <SiAdobephotoshop />
            <SiAdobepremierepro />
            <SiGimp />
            <SiBlender />
          </Col>
        </Row>
      </IconContext.Provider>
    </Container>
  );
}
