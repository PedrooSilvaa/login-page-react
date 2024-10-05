import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])