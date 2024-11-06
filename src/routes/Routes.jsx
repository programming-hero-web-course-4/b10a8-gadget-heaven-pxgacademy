import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
// import ErrorPage from "../errorPage/ErrorPage";
import Home from "../components/pages/home/Home";
import Statistics from "../components/pages/statistics/Statistics";
import Dashboard from "../components/pages/dashboard/Dashboard";
import Blogs from "../components/pages/blogs/Blogs";
import ShowDetails from "../components/ShowDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/product/details/:pId",
        element: <ShowDetails />,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);
