import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Homepage from "../Components/Homepage/Homepage";
import Blog from "../Components/Blog/Blog";
import Main from "../Layout/Main";
import Faq from "../Components/Faq/Faq";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Logout from "../Components/Logout/Logout";
import Courses from "../Components/Courses/Courses";
import Course from "../Components/Courses/Course";
import BuyCourse from "../Components/Courses/BuyCourse";
import OrderPlaced from "../Components/Courses/OrderPlaced";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />,
                loader: () => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/courses`);
                }
            },
            {
                path: "/courses",
                element: <Courses />,
                loader: () => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/courses`);
                }
            },
            {
                path: "/course/:id",
                element: <Course />,
                loader: () => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/courses`);
                }
            },
            {
                path: "/buy-course/:id",
                element: <PrivateRoute><BuyCourse /></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/course/${params.id}`);
                }
            },
            {
                path: "/order-placed/:id",
                element: <PrivateRoute><OrderPlaced /></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/course/${params.id}`);
                }
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
                element: <PublicRoute><Login /></PublicRoute>
            },
            {
                path: "/logout",
                element: <PrivateRoute><Logout /></PrivateRoute>
            },
            {
                path: "/signup",
                element: <PublicRoute><Signup /></PublicRoute>
            },



            {
                path: '*',
                element: <Error />
            }
        ]
    }
]);

export default Router;