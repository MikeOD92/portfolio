import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import { IconContext } from 'react-icons';
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
	SiGimp
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
	DiDjango,
	DiDocker,
	DiHeroku
} from 'react-icons/di';


export default function Skills() {
	return (
		<Container className='py-3'>
			<IconContext.Provider value={{className:"iconStyles"}}>
				<Row className="mt-4" style={{textAlign: 'center'}}> <h2> Skills</h2></Row>
				<Row className='mt-5'>
					<Col xs={12} sm={6} md={4} lg={4} xl={4} >
						<h3> _Front_End_ </h3>
						<DiHtml5/>
						<DiCss3/>
						<DiJsBadge/>
						<DiReact/>
						<SiRedux/>
						<DiJqueryLogo/>
						<SiBootstrap/>
						<DiSass/>
						<DiGulp/>	
					</Col>
					<Col xs={12} sm={6} md={4} lg={4} xl={4} >
						<h3> _Back_End_ </h3>
						<DiPython/>
						<DiRuby/>
						<DiNodejsSmall/>
						<DiDjango/>
						<SiRubyonrails/>
						<DiDocker/>
						<DiDatabase/>
						<DiPostgresql/>
						<DiMongodb/>
						<SiPostman/>
					</Col>
					<Col xs={12} sm={12} md={4} lg={4} xl={4} > 
						<h3> _Other_ </h3>
						<SiGit/>
						<DiHeroku/>
						<SiAdobeillustrator/>
						<SiAdobephotoshop/>
						<SiAdobepremierepro/>
						<SiGimp/>
						<SiBlender/>
					</Col>     
				</Row>
			</IconContext.Provider>
		</Container>
	)
}
