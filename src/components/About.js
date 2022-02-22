import React from 'react'
import { Container, Col, Row, Image} from 'react-bootstrap'

export default function About() {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col xs={6} sm={4} md={3} lg={3} xl={2} >
          <h2> About </h2>
          <Image
          className='profPic'
          fluid
          roundedCircle
          src="https://i.imgur.com/lGDDgKK.jpg"
          />
        </Col>
        <Col className="aboutLine">
          <p> This will be the about me section of my webnste what the hell i will say here? 
            beats me but for now we need trext for formatting</p>
          <p> Perhaps with time I will figfure out what to say, for now i will proboablyu just brain storm and formatt</p>
          <p>I will figure iut out, By the time i deploy this website </p> 
        </Col>
      </Row>
    </Container>
  )
}
