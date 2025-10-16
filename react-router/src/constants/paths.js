const PATHS = {
  ROOT: {
    // Root Layout의 기본(진입) 경로
    INDEX: "/",
    HOME: "/Home",
  },
  DUMMY: {
    INDEX: "/dummy",
    PRODUCTS: "/dummy/products",
    CARTS: "/dummy/carts",
    POSTS: "/dummy/posts",
    POSTDETAIL: "/dummy/postDetail/:postId",
    getPostDetail: (postId) => `/dummy/postDetail/${postId}`,
    PRODUCTDETAIL: "/dummy/productDetail/:productId",
    getproductDetail: (productId) => `/dummy/productDetail/${productId}`,
  },
};

export default PATHS;
