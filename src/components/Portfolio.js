import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import projectData from '../projectData';
import PortfolioCard from './Portfoliocard';

export default function Portfolio() {
  return (
    <Container id="portfolio" className='mt-3'>
      <Row className='mt-3'> <h2 style={{textAlign: "center"}}> Portfolio</h2></Row>
      <Row className='mt-3'>
        {projectData.map((project)=> {
          return(
            <Col xs={12} sm={6} md={6} lg={4} xl={3} key={project.title}>
              <PortfolioCard data={project}/> 
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
