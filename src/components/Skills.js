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
					<Col>
						<h3> Front_End </h3>
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
					<Col> 
						<h3> Back_End  </h3>
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
					<Col> 
						<h3> _Other_</h3>
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
