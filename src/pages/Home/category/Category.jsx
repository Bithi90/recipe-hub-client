import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Category = () => {
    const { id } = useParams();
    const categoryData = useLoaderData();
    console.log(categoryData);


    return (
        <div className='me-4 ps-4'>
            <h3> categories :{categoryData.length}</h3>
            {
                categoryData.map(data => <Chef
                    key={data.id}
                    data={data}
                ></Chef>)
            }
        </div>
    );
};

export default Category;