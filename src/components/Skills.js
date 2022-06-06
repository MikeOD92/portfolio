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
  SiTypescript,
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
            <div className="skillsDiv">
              <DiHtml5 />
              <p>HTML5</p>
            </div>
            <div className="skillsDiv">
              <DiCss3 />
              <p>CSS3</p>
            </div>
            <div className="skillsDiv">
              <DiJsBadge />
              <p>Javascript</p>
            </div>
            <div className="skillsDiv">
              <SiTypescript />
              <p>Typescript</p>
            </div>
            <div className="skillsDiv">
              <DiReact />
              <p>React</p>
            </div>
            <div className="skillsDiv">
              <SiRedux />
              <p>Redux</p>
            </div>
            <div className="skillsDiv">
              <DiJqueryLogo />
              <p>Jquery</p>
            </div>
            <div className="skillsDiv">
              <SiBootstrap />
              <p>Bootstrap</p>
            </div>
            <div className="skillsDiv">
              <DiSass />
              <p>SaSS</p>
            </div>
            <div className="skillsDiv">
              <DiGulp />
              <p>Gulp</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <h3> Back End </h3>
            <div className="skillsDiv">
              <DiPython />
              <p>Python</p>
            </div>
            <div className="skillsDiv">
              <DiRuby />
              <p>Ruby</p>
            </div>
            <div className="skillsDiv">
              <DiNodejsSmall />
              <p>NodeJS</p>
            </div>
            <div className="skillsDiv">
              <DiDjango />
              <p>Django</p>
            </div>
            <div className="skillsDiv">
              <SiRubyonrails />
              <p>Ruby on Rails</p>
            </div>
            <div className="skillsDiv">
              <DiDocker />
              <p>Docker</p>
            </div>
            <div className="skillsDiv">
              <DiDatabase />
              <p>Databases</p>
            </div>
            <div className="skillsDiv">
              <DiPostgresql />
              <p>PostgreSQL</p>
            </div>
            <div className="skillsDiv">
              <DiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="skillsDiv">
              <SiPostman />
              <p>Postman</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <h3> Other </h3>
            <div className="skillsDiv">
              <SiGit />
              <p>Git</p>
            </div>
            <div className="skillsDiv">
              <DiHeroku />
              <p>Heroku</p>
            </div>
            <div className="skillsDiv">
              <SiTestinglibrary />
              <p> React Testing Library</p>
            </div>
            <div className="skillsDiv">
              <SiJest />
              <p>Jest</p>
            </div>
            <div className="skillsDiv">
              <SiAdobeillustrator />
              <p> Adobe illustrator</p>
            </div>
            <div className="skillsDiv">
              <SiAdobephotoshop />
              <p>Adobe Photoshop</p>
            </div>
            <div className="skillsDiv">
              <SiAdobepremierepro />
              <p>Adobe Premiere Pro</p>
            </div>
            <div className="skillsDiv">
              <SiGimp />
              <p>Gimp</p>
            </div>
            <div className="skillsDiv">
              <SiBlender />
              <p>Blender</p>
            </div>
            {/* <div className="skillsDiv"></div> */}
          </Col>
        </Row>
      </IconContext.Provider>
    </Container>
  );
}
