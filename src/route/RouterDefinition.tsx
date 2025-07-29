import { createBrowserRouter } from "react-router";
import BasicLayout from "../layout/BasicLayout";
import { DashboardScreen } from "../screen/Dashboard";
import { HomeScreen } from "../screen/Home";

export const RouterDefinition = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />,
        children: [
            {
                path: '/',
                element: <HomeScreen />,
            },
            {
                path: '/dashboard',
                element: <DashboardScreen />,
            },
        ]
    }
])