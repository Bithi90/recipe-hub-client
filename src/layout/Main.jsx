import React, { useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Link } from 'react-router-dom';
import ChefData from '../pages/chefData/ChefData';

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
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h2>all chefs:{chefDataS.length}</h2>
                            {
                                chefDataS.map(chefData => <p
                                    key={chefData.id}
                                >
                               <ChefData></ChefData>
                                </p>)
                            }
                        </div>
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