import { MainLayout } from "components";
import { PATH } from "constant/config";
import { Home, Login, SignUp, User } from "pages";
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
    }
];