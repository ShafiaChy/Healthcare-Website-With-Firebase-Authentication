import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    
    const { user, logOut } = useAuth();

    return (
        <div >
          <Navbar className="py-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">The Kardio Klub.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="text-decoration-none text-color" to='/home' href="#features">Home</NavLink>
                    <NavLink className="text-decoration-none text-color" to='/about'href="#pricing">Why Kardio Klub?</NavLink>
                    <NavLink className="text-decoration-none text-color" to='/benefit'href="#pricing">Member Benefits</NavLink>
                    <NavLink className="text-decoration-none text-color" to='/workout'href="#pricing">Workout Tips</NavLink>
                    
                </Nav>
                
                <Nav>
                <span className="text-white me-2 mb-2 mt-2">{user.displayName || user.email}</span>
                {
                    user.email ? 
                    <button className="rounded py-2 px-3  py-sm-2 px-sm-3" onClick={logOut}>Sign Out</button>
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