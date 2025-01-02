import { routePaths } from "@/constants";
import GuestLayout from "@/layouts/GuestLayout";
import Layout from "@/layouts/Layout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: routePaths.HOME_ROUTE_PATH,
                element: <h1>Home</h1>,
            },
        ],
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: routePaths.LOGIN_ROUTE_PATH,
                element: <LoginPage />,
            },
            {
                path: routePaths.REGISTER_ROUTE_PATH,
                element: <RegisterPage />,
            },
        ],
    },
]);
