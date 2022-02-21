import React from 'react';
import {Container,Row, Col,} from 'react-bootstrap';
import Skills from './Skills'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
// import greenSplash from '../img/green-splash.jpg'
// import yellowSplash from '../img/yellow-splash.jpg'
export default function Home() {
  return (
    <Container  fluid style={{paddingLeft: "0", paddingRight: "0"}}>
      <Container fluid className="splash" style={{paddingLeft: "0", paddingRight: "0"}}>
            <Row>
              <Col>
                <h1 className='splashTitle' > _Michael_ T_ <br/>_O'Dell </h1>
              </Col>
              <Col></Col>
              <Col>
                <h2 className="splashSubTitle"> Software Engineer~  <br/>Web Developer~ <br/> Artist~</h2>
              </Col>
            </Row>
            
      </Container>
      <Container fluid>
        <Row>
          <About/>
        </Row>
        <Row>
          <Skills/>
        </Row>
        <Row>
          <Portfolio/>
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    </Container>
  )
}
