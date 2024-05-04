import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import Checkout from "../pages/checkout";
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
		path: "/checkout",
		element: <Checkout />,
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
