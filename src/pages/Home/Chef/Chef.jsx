/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Chef = ({ data }) => {
    console.log(data);
    const {id, chefs_img, name, likes, years_of_experience, details,
        number_of_recipe } = data;

    return (
        <Card>
            <Card.Header   as="h5">
        <Card.Img variant="top" className='w-50' style={{height: '400px'}} src={chefs_img} alt='chef img' />
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {details.length<250?<>{details}</>:
                  <>{details.slice(0, 250)}...<Link to={`/chefData/${id}`}>Read More</Link></>
                  }
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <p>{years_of_experience}</p>
                    <p>{number_of_recipe}</p>
                    <p>{likes}<FaHeart /></p>
                </div>
                <Button variant="primary">View Recipes...</Button>
            </Card.Body>
        </Card>
        
    );
};

export default Chef;