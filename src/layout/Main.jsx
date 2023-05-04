import React, { useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


import Home from '../pages/Home/Home/Home';

const Main = () => {

    const [chefDataS, setchefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => setchefData(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Container>

                <Row>
                   
                    <Col lg={9}>
                       
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;