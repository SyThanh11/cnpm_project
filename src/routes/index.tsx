import { MainLayout } from "components";
import { PATH } from "constant/config";
import { Home, Login } from "pages";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
    {
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: PATH.login,
                element: <Login></Login>
            }
        ]
    }
];