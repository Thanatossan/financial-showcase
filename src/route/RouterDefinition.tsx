import { createBrowserRouter } from "react-router";
import BasicLayout from "../layout/BasicLayout";
import { DashboardScreen } from "../screen/Dashboard";
import { OverviewScreen } from "../screen/Overview";

export const RouterDefinition = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />,
        children: [
            {
                path: '/',
                element: <OverviewScreen />,
            },
            {
                path: '/dashboard',
                element: <DashboardScreen />,
            },
        ]
    }
])