import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    }
])