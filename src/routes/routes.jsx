import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";

import ChefData from "../pages/chefData/ChefData";
import Details from "../layout/Details";



const router = createBrowserRouter([

    {
        path: '/',
        element : <Main></Main>,
        children  :[
            {
                path:'/',
                element:<Category></Category>,
                loader: () => fetch('http://localhost:5000/chefData')

            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'chefData',
        element:<Details></Details>,
        children: [
            {
                path:':id',
                element:<ChefData></ChefData>,
                 loader:({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)

            }
        ]
    }
])

export default router;