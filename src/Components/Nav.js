import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Nav1 = () => {
  return (

<Navbar bg="dark" expand="lg" sticky='top' variant='dark'>
      <Container>
        <Navbar.Brand href="#main" >{'(☞ﾟヮﾟ)☞ '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#main">Inicio</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Conctacto</Nav.Link>
            <Nav.Link ><img
              href="https://github.com/MaxiAlem"
              target="_blank"rel="noreferrer"
              alt="github"
              src="../assets/gh.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Nav.Link>
            <Nav.Link ><img
              href="https://www.linkedin.com/in/maxialem90/"
              target="_blank"rel="noreferrer"
              alt="github"
              src="../assets/linkedin.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav1