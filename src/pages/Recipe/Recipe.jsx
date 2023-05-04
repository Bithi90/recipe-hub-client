import React from 'react';

const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { recipe_name, cooking_method, ingredient, recipe_img } = recipe;

    return (
        <div  className=' border border-black p-4 mb-4'>
            <div className='text-center mb-4'>
                <h2>{recipe_name}</h2>
            </div>

            <div className=' d-flex justify-content-center  '>
                <img style={{height:'400px'}} className='w-25 me-4' src={recipe_img} alt="" />
                <div className='border border-black p-4 me-4 text-center pt-4 '>
                    <h3>Ingredient</h3>
                    <p>{ingredient}</p>
                </div>
                <div className='border border-black p-4 me-4'>
                    <h3>Cooking Method</h3>
                    <p>{cooking_method}</p>
                </div>
            </div>
        </div>
    );
};

export default Recipe;