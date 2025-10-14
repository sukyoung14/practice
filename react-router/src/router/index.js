import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout.jsx";
import DummyLayout from "../layouts/DummyLayout.jsx";

import Home from "../pages/RootPages/Home";
import Products from "../pages/DummyPages/Products";
import Carts from "../pages/DummyPages/Carts";
import Posts from "../pages/DummyPages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        path: "products",
        Component: Products,
      },
      {
        path: "carts",
        Component: Carts,
      },
      {
        path: "posts",
        Component: Posts,
      },
    ],
  },
]);

export default router;
