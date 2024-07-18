import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Orderhistory from "../pages/order-history";
import Shop from "../pages/shop";
import ShopDetails from "../pages/shop-details";
import SignIn from "../pages/sign_in";
import SignUp from "../pages/sign_up";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/shop-details",
        element: <ShopDetails />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/order-history",
        element: <Orderhistory />,
    },
    {
        path: "/sign_in",
        element: <SignIn />,
    },
    {
        path: "/sign_up",
        element: <SignUp />,
    },
]);
