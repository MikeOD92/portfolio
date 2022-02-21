import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import { Gi3DStairs } from "react-icons/gi";

export default function Header() {
  return (

    <Navbar sticky="top" className="py-3" bg="black" variant="dark" expand="lg" collapseOnSelect style={{boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.2)"}}>
      <Container>

        <LinkContainer to="#home">
          <Navbar.Brand className="homeLink"> <Gi3DStairs/> </Navbar.Brand>
        </LinkContainer> 
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto align-items-center">

                  <LinkContainer to='#about'>
                      <Nav.Link className="navLink">About</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='#portfolio'>
                      <Nav.Link className="navLink">Portfolio</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='#contact'>
                      <Nav.Link className="navLink">Contact</Nav.Link>
                  </LinkContainer>

              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
  )
}
