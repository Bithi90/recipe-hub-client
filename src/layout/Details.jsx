import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Home from '../pages/Home/Home/Home';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Footer from '../pages/Shared/Footer/Footer';

const Details = () => {
    return (
        <div>
        <Header></Header>
        <Container>

            <Row>
               
                <Col lg={12}>
                   <Outlet></Outlet>
                </Col>
                
            </Row>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default Details;