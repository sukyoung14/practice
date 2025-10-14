import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <button className="p-1 cursor-pointer" onClick={() => navigate("/")}>
        홈페이지
      </button>
      <button
        className="p-1 cursor-pointer"
        onClick={() => navigate("/dummy/products")}
      >
        Products
      </button>
      <button
        className="p-1 cursor-pointer"
        onClick={() => navigate("/dummy/carts")}
      >
        Carts
      </button>
      <button
        className="p-1 cursor-pointer"
        onClick={() => navigate("/dummy/posts")}
      >
        Posts
      </button>
    </div>
  );
}
