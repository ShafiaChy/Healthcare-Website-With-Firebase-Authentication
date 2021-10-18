import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
const Header = () => {
    return (
        <div >
          <Navbar className="py-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Kardio Klub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to='/home' href="#features">Home</Nav.Link>
                    <Nav.Link to='services' href="#pricing">Services</Nav.Link>
                    <Nav.Link to='/about'href="#pricing">Why Kardio Klub?</Nav.Link>
                    <Nav.Link to='/store' href="#pricing">Kardio Klub Store</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                    </Container>
                </Navbar>
 
        </div>
    );
};

export default Header;