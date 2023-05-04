import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layout/ChefLayout/ChefLayout";
import ChefData from "../pages/chefData/ChefData";
import ChefLayout from "../layout/ChefLayout/ChefLayout";


const router = createBrowserRouter([

    {
        path: '/',
        element : <Main></Main>,
        children  :[
            {
                path:'/',
                element:<Home></Home>

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
        element:<ChefLayout></ChefLayout>,
        children: [
            {
                path:':id',
                element:<ChefData></ChefData>,
                // loader;({params}) => fetch('')

            }
        ]
    }
])

export default router;