import React from 'react'
import { GiIBeam, GiNestedHexagons} from "react-icons/gi";
import { DiGithubBadge,  } from "react-icons/di";
import {AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";

import { IconContext } from 'react-icons';
import {Row, Col, Nav} from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='py-3' style={{background: "black"}} id="contact">
      <Row className='mt-3'>
        <Col xs={12} sm={12} md={3} lg={4} xl={4}>
          <p style={{color: "white", marginLeft: "5vw"}}>
          <IconContext.Provider value={{style: {color: "white", fontSize: "30px", marginRight: '3vw'}}}>
            <GiIBeam/>
            <GiNestedHexagons/>
          </IconContext.Provider>{" "} Michael ~ T ~ O'Dell</p>
        </Col>
        <IconContext.Provider value={{className: "contactIcons"}}>
        <Col>
            <Nav.Link href="mailto:michaelodell660@gmail.com" className='contactItem'><AiOutlineMail/>MICHAELODELL660@GMAIL.COM</Nav.Link>
            <Nav.Link href='https://github.com/MikeOD92' className="contactItem"><DiGithubBadge/>github</Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/michaelodell92/' className="contactItem"><AiOutlineLinkedin/>linkedIn</Nav.Link>
        </Col>
        </IconContext.Provider>
      </Row>
    </footer>
  )
}
