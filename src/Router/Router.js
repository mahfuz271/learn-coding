import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Homepage from "../Components/Homepage/Homepage";
import Main from "../Layout/Main";

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
                path: '*',
                element: <Error />
            }
        ]
    }
]);

export default Router;