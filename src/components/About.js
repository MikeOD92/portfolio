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
              <p> My name is Michael, I'm a software engineer and creative, who uses Javascript and Python to build web applications.</p>
        </Col>
      </Row>
    </Container>
  )
}
