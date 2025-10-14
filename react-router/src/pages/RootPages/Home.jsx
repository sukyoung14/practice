import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <br />
      <Link className="p-2" to="/">
        홈페이지
      </Link>
      <Link className="p-2" to="/dummy/products">
        Products
      </Link>
      <Link className="p-2" to="/dummy/carts">
        Carts
      </Link>
      <Link className="p-2" to="/dummy/posts">
        Posts
      </Link>
    </div>
  );
}
