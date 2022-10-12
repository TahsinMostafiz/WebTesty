import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Blog from "../Components/Blog";
import About from "../Components/About";


const router = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/about',
                element : <About></About>
            },
        ]
    }
]);

export default router;