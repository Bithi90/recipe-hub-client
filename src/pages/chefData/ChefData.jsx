/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../Shared/Header/Header';
import { Button, Card, CardImg } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const ChefData = () => {


    const recipeData = useLoaderData();
    console.log(recipeData);

    const {recipes, chefs_img, name, likes, years_of_experience, details,
        number_of_recipe } = recipeData;

        const [addToFvrt , setAddToFvrt] = useState(false);

        const handleFavouriteBtn = event => {
            event.currentTarget.disabled = true;
            toast('added to your favourite');
          
        };

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
                    <Button  onClick={handleFavouriteBtn} variant="warning">Add to Favourite <FaHeart></FaHeart> </Button>
                    <ToastContainer />
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