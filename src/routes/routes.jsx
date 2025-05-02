import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>news Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error page</h2>,
  },
]);
