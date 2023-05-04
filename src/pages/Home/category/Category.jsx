import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Category = () => {
    const { id } = useParams();
    const categoryData = useLoaderData();
    console.log(categoryData);


    return (
        <div>
            <h3>this is category:{categoryData.length}</h3>
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