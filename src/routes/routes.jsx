import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";

import ChefData from "../pages/chefData/ChefData";
import Details from "../layout/Details";
import LayoutOfLogin from "../layout/LayoutOfLogin";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";



const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutOfLogin></LayoutOfLogin>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },

    {
        path: 'category',
        element : <Main></Main>,
        children  :[
            // {
            //     path:'/',
            //     element:<Category></Category>,
            //     loader: () => fetch('http://localhost:5000/chefData')

            // },
            {
                path: ':id',
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