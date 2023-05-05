import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user , logOut } = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

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
                            <Link className='ms-2 text-black text-decoration-none' to="/category/0">Home</Link>
                            <Link className='ms-2 text-black text-decoration-none'>About</Link>
                            <Link className='ms-2 text-black text-decoration-none'>Blog</Link>

                        </Nav>
                        <Nav>
                           
                            {user ?
                                <Button onClick={handleLogOut} variant="warning">Logout</Button> :
                            <Link to="/login">
                                <Button variant="warning">Login</Button>
                            </Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;