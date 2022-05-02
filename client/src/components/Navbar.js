import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
  return (
  <>  
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Blogsite</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Sign up</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  </>
  )
}

export default Header