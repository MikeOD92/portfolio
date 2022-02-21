import React from 'react';
import {Container,Row, Col, Image} from 'react-bootstrap';
import Skills from './Skills'
// import greenSplash from '../img/green-splash.jpg'
// import yellowSplash from '../img/yellow-splash.jpg'
export default function Home() {
  return (
    <Container fluid style={{paddingLeft: "0", paddingRight: "0"}}>
      <Container fluid className="splash" style={{paddingLeft: "0", paddingRight: "0"}}>
            <Row>
              <Col>
                <h1 className='splashTitle' id="home"> _Michael_ T_ <br/>_O'Dell </h1>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            
      </Container>
      <Container>
        <Row>
          <Skills/>
        </Row>
      </Container>
    </Container>
  )
}
