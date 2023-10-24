import { MainLayout, PrintLayout } from "components";
import { PATH } from "constant/config";
import { Home, Login, PrintOne, SignUp, User } from "pages";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home /> 
            },
            {
                path: PATH.login,
                element: <Login />
            },
            {
                path: PATH.signUp,
                element: <SignUp />
            },
            {
                path: PATH.user,
                element: <User />
            }
        ]
    },
    {
        element: <PrintLayout />,
        children: [
            {
                path: PATH.printOne,
                element: <PrintOne />
            }
        ]
    },
];