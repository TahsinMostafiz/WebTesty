import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Blog from "../Components/Blog";
import About from "../Components/About";
import ReactRoute from "../Components/Blog/ReactRoute";
import ContextApi from "../Components/Blog/ContextApi";
import UseRef from "../Components/Blog/UseRef";


const router = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        loader : async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        children : [
            {
                path : '/',
                loader : async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
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
            {
                path : '/reactroute',
                element : <ReactRoute></ReactRoute>
            },
            {
                path : '/contextapi',
                element : <ContextApi></ContextApi>
            },
            {
                path : '/useref',
                element : <UseRef></UseRef>
            }
        ]
    }
]);

export default router;