import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightNav = () => {

    const [categories , setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error =>console.error(error))
    }, [])


    return (
        <div>
            <h3>Categories</h3>
            {
                categories.map(category =><p
                key={category.id}
                >
                    <Link>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default RightNav;