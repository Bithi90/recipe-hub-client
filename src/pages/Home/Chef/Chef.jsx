import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Chef = ({ data }) => {
    console.log(data);
    const {id ,chefs_img, name ,likes ,years_of_experience ,
    number_of_recipe } = data;
   
    return (
        <Card>
            <Card.Header as="h5">
            <Card.Img variant="top" src={chefs_img} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Chef;