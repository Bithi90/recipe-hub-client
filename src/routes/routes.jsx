import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";

import ChefData from "../pages/chefData/ChefData";
import Details from "../layout/Details";
import LayoutOfLogin from "../layout/LayoutOfLogin";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blog from "../pages/Home/Blog/Blog";



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
                path:'/blog',
                element:<Blog></Blog>
               
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
                element:<PrivateRoute><ChefData></ChefData></PrivateRoute>,
                 loader:({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)

            }
            
            
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;