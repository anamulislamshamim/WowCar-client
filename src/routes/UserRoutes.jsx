import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ShowCardByCategory from "../pages/ShowCardByCategory/ShowCardByCategory";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import { Blog } from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/used-cars/:category",
                loader:({ params }) => fetch(`http://localhost:4000/used-cars/${ params.category }`),
                element:<PrivateRoutes><ShowCardByCategory /></PrivateRoutes>
            },
            {
                path:"/blog",
                element:<Blog />
            }
        ]
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/register",
        element:<SignUp />
    }
]);

export default router;