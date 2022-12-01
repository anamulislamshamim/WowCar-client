import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ShowCardByCategory from "../pages/ShowCardByCategory/ShowCardByCategory";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import { Blog } from "../pages/Blog/Blog";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddCar from "../pages/Dashboard/AddCar/AddCar";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import MyBookedCars from "../pages/Dashboard/MyBookedCars/MyBookedCars";

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
            },
            {
                path:"/dashboard",
                element:<PrivateRoutes><Dashboard /></PrivateRoutes>,
                children:[
                    {
                        path:"/dashboard",
                        element:<p>Welcome to the Dashboard!</p>
                    },
                    {
                        path:"/dashboard/add-product",
                        element:<AddCar />
                    },
                    {
                        path:"/dashboard/my-buyers",
                        element:<p>My buyers</p>
                    },
                    {
                        path:"/dashboard/my-orders",
                        element:<MyBookedCars />
                    },
                    {
                        path:"/dashboard/my-products",
                        element:<MyProducts />
                    },
                    {
                        path:"/dashboard/all-sellers",
                        element:<AllSellers />
                    },
                    {
                        path:"/dashboard/all-buyers",
                        element:<AllBuyers />
                    },
                    {
                        path:"/dashboard/reported-items",
                        element:<p>Here are all reported items</p>
                    }
                ]
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