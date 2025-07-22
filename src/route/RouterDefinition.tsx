import { createBrowserRouter } from "react-router";
import BasicLayout from "../layout/BasicLayout";

export const RouterDefinition = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />,
        children: [
            {
                path: '',
                element: <div>Home Page</div>
            }
        ]
    }
])