import { HistoryLayout, MainLayout, PrintLayout } from "components";
import { PATH } from "constant/config";
import { Home, Login, PrintOne, SignUp, User, About, PrintTwo, HistoryPrint, HistoryBuy } from "pages";
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
            },
            {
                path: PATH.about,
                element: <About />
            }
        ]
    },
    {
        element: <PrintLayout />,
        children: [
            {
                path: PATH.printOne,
                element: <PrintOne />
            },
            {
                path: PATH.printTwo,
                element: <PrintTwo />
            }
        ]
    },
    {
        element: <HistoryLayout />,
        children: [
            {
                path: PATH.historyPrint,
                element: <HistoryPrint />
            },
            {
                path: PATH.historyBuy,
                element: <HistoryBuy />
            }
        ]
    }
];