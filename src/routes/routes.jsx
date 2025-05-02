import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
