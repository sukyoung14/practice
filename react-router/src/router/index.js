import { createBrowserRouter } from "react-router-dom";

// import RootLayout from "../layouts/RootLayout.jsx";
// import DummyLayout from "../layouts/DummyLayout.jsx";

// import Home from "../pages/RootPages/Home";
// import Products from "../pages/DummyPages/Products";
// import Carts from "../pages/DummyPages/Carts";
// import Posts from "../pages/DummyPages/Posts";
// import PostDetail from "../pages/DummyPages/PostDetail";
// import ProductDetail from "../pages/DummyPages/ProductDetail";

import rootRoutes from "./routes/rootRoutes.js";
import dummyRoutes from "./routes/dummyRoutes.js";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  // 스프레드 연산자(...)로 경로 배열을 복사
  ...rootRoutes,
  ...dummyRoutes,
  {
    path: "*",
    Component: NotFound,
  },
  // {
  //   path: "/",
  //   Component: RootLayout,
  //   children: [
  //     {
  //       index: true,
  //       Component: Home,
  //     },
  //   ],
  // },
  // {
  //   path: "/dummy",
  //   Component: DummyLayout,
  //   children: [
  //     {
  //       path: "products",
  //       Component: Products,
  //     },
  //     {
  //       path: "carts",
  //       Component: Carts,
  //     },
  //     {
  //       path: "posts",
  //       Component: Posts,
  //     },
  //     {
  //       path: "postDetail/:postId",
  //       Component: PostDetail,
  //     },
  //     {
  //       path: "productDetail/:productId",
  //       Component: ProductDetail,
  //     },
  //   ],
  // },
]);

export default router;
