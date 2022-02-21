import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Gi3DStairs } from "react-icons/gi";

export default function Header() {
  return (

    <Navbar sticky="top" className="py-3" bg="black" variant="dark" expand="lg" collapseOnSelect style={{boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.2)"}}>
      <Container>

          <Navbar.Brand href="#home"className="homeLink"> <Gi3DStairs/> </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto align-items-center">

                <Nav.Link href='#about' className="navLink">About</Nav.Link>

                <Nav.Link href='#portfolio' className="navLink">Portfolio</Nav.Link>

                <Nav.Link href='#contact' className="navLink">Contact</Nav.Link>


              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
  )
}
