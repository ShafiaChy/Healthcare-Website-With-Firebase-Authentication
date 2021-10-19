import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import useHooks from '../../Hooks/useHooks';


const Header = () => {
    
    const { user, logOut } = useHooks();

    return (
        <div >
          <Navbar className="py-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Kardio Klub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="text-decoration-none text-color" to='/home' href="#features">Home</NavLink>
                    <NavLink className="text-decoration-none text-color" to='/about'href="#pricing">Why Kardio Klub?</NavLink>
                    
                </Nav>
                <Nav>
                <span className="text-white me-2">{user.displayName}</span>
                {
                    user.email ? 
                    <button onClick={logOut}>Sign Out</button>
                    :
                    <NavLink className="text-decoration-none text-color" to='/login' href="#deets">Login</NavLink>  
                }
                </Nav>
                </Navbar.Collapse>
                    </Container>
                </Navbar>
 
        </div>
    );
};

export default Header;