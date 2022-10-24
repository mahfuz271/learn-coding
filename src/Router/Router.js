import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Homepage from "../Components/Homepage/Homepage";
import Blog from "../Components/Blog/Blog";
import Main from "../Layout/Main";
import Faq from "../Components/Faq/Faq";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },



            {
                path: '*',
                element: <Error />
            }
        ]
    }
]);

export default Router;