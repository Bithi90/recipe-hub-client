import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-warning-emphasis'>ℝ𝕖𝕔𝕚𝕡𝕖 ℍ𝕦𝕓</h1>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
        
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                           <Link className='ms-2 text-black text-decoration-none' to="/">Home</Link>
                            <Link className='ms-2 text-black text-decoration-none'>About</Link>
                            <Link className='ms-2 text-black text-decoration-none'>Blog</Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Button variant="warning">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;