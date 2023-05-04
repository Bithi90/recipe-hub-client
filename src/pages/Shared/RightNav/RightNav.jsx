import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div className='ms-4'>
            <h3>Categories :</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
                <h2 className='mb-4'>Login With</h2>
                <Button className='mb-2' variant="info"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="secondary"><FaGithub /> Login with Github</Button>
            </div>
        </div>
    );
};

export default RightNav;