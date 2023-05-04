/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Shared/Header/Header';
import { Button, Card, CardImg } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';




const ChefData = () => {


    const recipeData = useLoaderData();
    console.log(recipeData);

    const {recipes, chefs_img, name, likes, years_of_experience, details,
        number_of_recipe } = recipeData;
    return (
        <div>

            <Card>
                <Card.Img className='w-25' variant="top" src={chefs_img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p>{years_of_experience}</p>
                        <p>{number_of_recipe}</p>
                        <p>{likes}<FaHeart /></p>
                    </div>
                    <Button variant="warning">Go somewhere</Button>

                </Card.Body>
            </Card>
            <div>
                <h2>Some Popular Recipes</h2>
                {
                    recipes.map(recipe =><Recipe
                        key={recipe.id}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>

        </div>
    );
};

export default ChefData;