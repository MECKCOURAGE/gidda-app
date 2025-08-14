import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import App from "./App";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: []
    },
    {
        path: "home",
        element: <HomePage/>
    }

])


export default router;