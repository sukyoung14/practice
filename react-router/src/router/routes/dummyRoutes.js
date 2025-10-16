import DummyLayout from "../../layouts/DummyLayout";
import PATHS from "../../constants/paths.js";

import Products from "../../pages/DummyPages/Products";
import Carts from "../../pages/DummyPages/Carts";
import Posts from "../../pages/DummyPages/Posts";
import PostDetail from "../../pages/DummyPages/PostDetail";
import ProductDetail from "../../pages/DummyPages/ProductDetail";

const dummyRoutes = [
  {
    path: PATHS.DUMMY.INDEX,
    Component: DummyLayout,
    children: [
      {
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
      {
        path: PATHS.DUMMY.CARTS,
        Component: Carts,
      },
      {
        path: PATHS.DUMMY.POSTS,
        Component: Posts,
      },
      {
        path: PATHS.DUMMY.POSTDETAIL,
        Component: PostDetail,
      },
      {
        path: PATHS.DUMMY.PRODUCTDETAIL,
        Component: ProductDetail,
      },
    ],
  },
];
export default dummyRoutes;
