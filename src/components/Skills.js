import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobepremiere,
	SiBlender,
	SiPostman
} from 'react-icons/si';

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
	DiDjango
} from 'react-icons/di';


export default function Skills() {
  return (
    <Container>
      <Row> <h2> Skills</h2></Row>
      <Row>
        <Col>
			<DiHtml5/>
			<DiCss3/>
			<DiJsBadge/>
        </Col>
        <Col> 
        </Col>
        <Col> 
        </Col>     
      </Row>
    </Container>
  )
}
